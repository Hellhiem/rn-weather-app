import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export const betterFetch = async <ResponseType = AxiosResponse>(
  method: Method,
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<ResponseType> => {
  try {
    const response: AxiosResponse<ResponseType> = await axios({
      method: method,
      url: endpoint,
      ...config,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
