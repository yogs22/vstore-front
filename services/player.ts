import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;

export async function getFeaturedGame() {
  const URL = 'players/landingpage';

  const response = await axios.get(`${API_URL}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailVoucher(id) {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${API_URL}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
