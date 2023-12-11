import { IHttpParams } from './IHttpParams';
import { getDefaultHeaders, getParams } from './HttpHelper';

class HttpService {
  static async request<T>(props: IHttpParams) {
    try {
      const { url, method, queryParams, data } = props;

      const params: URLSearchParams = getParams(queryParams);
      const urlWithParams = `${url}?${params.toString()}`; // Params to string
      console.log(urlWithParams);
      const response = await fetch(urlWithParams, {
        method,
        body: data ? JSON.stringify(data as T) : undefined,
        ...getDefaultHeaders()
      });

      if (!response.ok) {
        throw new Error(`Request failed. ${response.ok}`);
      }

      return await response.json();
    } catch (e) {
      throw new Error((e as { message: string})?.message);
    }
  }
}

export default HttpService;
