import axios from 'axios';
import callAPI from '../config/api/index.ts';
import { CheckoutTypes } from './data-types/index.ts';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function getFeaturedGame() {
  const URL = 'players/landingpage';

  const response = await axios.get(`${API_URL}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${API_URL}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse;
}

export async function getGameCategory() {
  const URL = 'players/category';

  const response = await axios.get(`${API_URL}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function storeCheckout(data: CheckoutTypes) {
  const url = `${API_URL}/players/checkout`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}
