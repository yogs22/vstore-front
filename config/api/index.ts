import axios, { AxiosRequestConfig } from 'axios';

export default async function callAPI({ url, method, data }: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  const axiosResponse = response.data;

  if (response.status > 300) {
    const res = {
      error: true,
      message: axiosResponse.message,
      data: null,
    };

    return res;
  }

  return axiosResponse;
}
