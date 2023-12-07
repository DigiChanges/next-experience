'use server';
import { config } from '@/features/shared/actions/config';
import { IHttpParams } from '@/service/IHttpParams';
import HttpService from '@/service/HttpService';
import { ItemPayload, ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import PayloadProps from '@/features/shared/interfaces/PayloadProps';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const { baseUrl } = config.apiGateway.server;
const { base } = config.apiGateway.routes.items;

export const getItems = async() => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}`,
    method: 'GET'
  };
  return HttpService.request<ItemsResponse[]>(config);
};

export const deleteItem = async({ id }: PayloadProps) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'DELETE'
  };

  await HttpService.request<ItemsResponse>(config);
  revalidatePath('/items');
};

export const createItem = async({ data }: PayloadProps<ItemPayload>) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}`,
    method: 'POST',
    data
  };
  await HttpService.request<ItemsResponse>(config);

  revalidatePath('/items');
  redirect('/items');
};

export const updateItem = async({ id, data } : PayloadProps<ItemPayload>)  => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'PUT',
    data
  };
  await HttpService.request<ItemsResponse>(config);

  revalidatePath('/items');
  redirect('/items');
};

export const getOne = async({ id }: PayloadProps) => {
  const config: IHttpParams = {
    url: `${baseUrl}/${base}/${id}`,
    method: 'GET'
  };

  return HttpService.request<ItemsResponse>(config);
};


