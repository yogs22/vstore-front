import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function getFeaturedGame() {
  const response = await axios.get(`${API_URL}/players/landingpage`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher() {
  return null;
}
