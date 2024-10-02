'use server';
import { IHttpParams } from '@/service/IHttpParams';
import HttpService from '@/service/HttpService';
import { config } from '@/features/shared/actions/config';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.files;

export const handleUploadFile = async(data: any) => {
  try {
    console.log(data);
    const config: IHttpParams = {
      url: `${baseUrl}/${base}?isOptimize=true&isPublic=true&isOriginalName=true`,
      method: 'POST',
      data
    };
    return await HttpService.request(config);
  } catch (e) {
    console.log(e);
    throw new Error((e as { message: string})?.message);
  }
};

