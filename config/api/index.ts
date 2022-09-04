import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token: boolean;
}

export default async function callAPI({
  url, method, data, token,
}: CallAPIProps) {
  let headers = {};
  if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
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
