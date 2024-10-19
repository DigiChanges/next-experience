'use server';
import { config } from '@/config/config';
import { FileMetadata } from '@/features/shared/interfaces/FileMetadata';
import HttpService from '@/service/HttpService';
import { HeadersContentType, IHttpParams } from '@/service/IHttpParams';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.files;

export const handleUploadFile = async (data: FormData): Promise<FileMetadata> => {
  try {
    const config: IHttpParams = {
      url: `${baseUrl}/${base}`,
      method: 'POST',
      headers: HeadersContentType.FILE_FORM,
      data,
    };

    return HttpService.request(config);
  } catch (e) {
    throw new Error((e as { message: string })?.message);
  }
};

export const handleGetFile = async (id: string): Promise<FileMetadata> => {
  try {
    const config: IHttpParams = {
      url: `${baseUrl}/${base}/metadata/${id}`,
      method: 'GET',
    };

    return HttpService.request(config);
  } catch (e) {
    throw new Error((e as { message: string })?.message);
  }
};
