import { HeadersContentType, IHttpParams } from './IHttpParams';
import { getDefaultHeaders, getParams } from './HttpHelper';


class HttpService {
  static async request<T>(props: IHttpParams) {
    try {
      const { url, method, queryParams, data, headers } = props;

      const params: URLSearchParams = getParams(queryParams);

      const urlWithParams = `${url}?${params.toString()}`;

      const defaultHeaders = await getDefaultHeaders();

      const body = headers === HeadersContentType.FILE_FORM ? data as T : JSON.stringify(data as T);
      const response = await fetch(urlWithParams, {
        method,
        body,
        ...defaultHeaders
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
