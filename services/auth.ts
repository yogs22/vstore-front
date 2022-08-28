import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function setSignUp(data) {
  const URL = 'auth/signup';

  const response = await axios.post(`${API_URL}/${URL}`, data).catch((err) => err.response);
  const axiosResponse = response.data;

  if (axiosResponse.data == null) {
    return axiosResponse;
  }

  return axiosResponse.data;
}

export async function setLogin() {
  return null;
}
