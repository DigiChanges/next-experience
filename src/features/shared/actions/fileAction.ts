'use server';
import { config } from '@/features/shared/actions/config';
import HttpService from '@/service/HttpService';
import { HeadersContentType, IHttpParams } from '@/service/IHttpParams';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.files;

export const handleUploadFile = async (data: object | null | undefined) => {
  try {
    const config: IHttpParams = {
      url: `${baseUrl}/${base}`,
      method: 'POST',
      headers: HeadersContentType.FILE_FORM,
      data,
    };

    return await HttpService.request(config);
  } catch (e) {
    throw new Error((e as { message: string })?.message);
  }
};

export const handleGetFile = async (id: string) => {
  try {
    const config: IHttpParams = {
      url: `${baseUrl}/${base}/metadata/${id}`,
      method: 'GET',
    };

    return await HttpService.request(config);
  } catch (e) {
    throw new Error((e as { message: string })?.message);
  }
};
