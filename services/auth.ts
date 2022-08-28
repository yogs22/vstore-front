import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function setSignUp(data) {
  const URL = 'auth/signup';

  const response = await axios.post(`${API_URL}/${URL}`, data);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setLogin() {
  return null;
}
