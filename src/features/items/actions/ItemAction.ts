'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { config } from '@/config/config';
import { ItemPayload, ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import PayloadProps from '@/features/shared/interfaces/PayloadProps';
import HttpService from '@/service/HttpService';
import { HeadersContentType, IHttpParams } from '@/service/IHttpParams';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.items;

export const getItems = async ({ queryParams }: PayloadProps) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}`,
    method: 'GET',
    queryParams,
  };
  return HttpService.request<ItemsResponse[]>(config);
};

export const deleteItem = async ({ id }: PayloadProps) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'DELETE',
  };

  await HttpService.request<ItemsResponse>(config);
  revalidatePath('/items');
};

export const createItem = async ({ data }: PayloadProps<ItemPayload>) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}`,
    method: 'POST',
    data,
    headers: HeadersContentType.JSON,
  };

  await HttpService.request<ItemsResponse>(config);

  revalidatePath('/items');
  redirect('/items');
};

export const updateItem = async ({ id, data }: PayloadProps<ItemPayload>) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'PUT',
    data,
    headers: HeadersContentType.JSON,
  };
  await HttpService.request<ItemsResponse>(config);

  revalidatePath('/items');
  redirect('/items');
};

export const getOne = async ({ id }: PayloadProps) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'GET',
  };

  return HttpService.request<ItemsResponse>(config);
};
