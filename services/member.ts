import callAPI from '../config/api/index.ts';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function getMemberOverview() {
  const url = `${API_URL}/players/dashboard`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getMemberTransactions(valueParams: string) {
  let params = '';

  if (valueParams === 'all') {
    params = '';
  } else {
    params = `?status=${valueParams}`;
  }

  const url = `${API_URL}/players/history${params}`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getTransactionDetal(id: string, token: string) {
  const url = `${API_URL}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: 'GET',
    serverToken: token,
  });
}

export async function updateProfile(data: FormData) {
  const url = `${API_URL}/players/profile`;

  return callAPI({
    url,
    method: 'PUT',
    data,
    token: true,
  });
}
