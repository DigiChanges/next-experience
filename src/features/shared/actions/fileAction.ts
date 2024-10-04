'use server';
import { HeadersContentType, IHttpParams } from '@/service/IHttpParams';
import HttpService from '@/service/HttpService';
import { config } from '@/features/shared/actions/config';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.files;

export const handleUploadFile = async(data: object | null | undefined) => {
  try {
    const config: IHttpParams = {
      url: `${baseUrl}/${base}`,
      method: 'POST',
      headers: HeadersContentType.FILE_FORM,
      data
    };

    return await HttpService.request(config);
  } catch (e) {
    throw new Error((e as { message: string})?.message);
  }
};

