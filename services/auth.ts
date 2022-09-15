import callAPI from '../config/api/index';
import { LoginTypes } from './data-types/index';

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
