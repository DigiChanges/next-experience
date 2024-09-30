
import { IHttpParams } from '@/service/IHttpParams';

import HttpService from '@/service/HttpService';
import { config } from '@/features/shared/actions/config';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.files;

export const handleUploadFile = async(data: { data: object | null | undefined }) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}`,
    method: 'POST',

    data
  };
  return await HttpService.request(config);
};
