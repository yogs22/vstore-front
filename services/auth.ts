import callAPI from '../config/api/index.ts';
import { LoginTypes } from './data-types/index.ts';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function setSignUp(data: FormData) {
  return callAPI({
    url: `${API_URL}/auth/signup`,
    method: 'POST',
    data,
  });
}

export async function setLogin(data: LoginTypes) {
  return callAPI({
    url: `${API_URL}/auth/signin`,
    method: 'POST',
    data,
  });
}
