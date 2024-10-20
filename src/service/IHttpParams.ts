type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK';

export enum HeadersContentType {
  FILE_FORM = 'multipart/related',
  JSON = 'application/json',
}

export interface PaginationParams {
  limit: string;
  offset: string;
}

export interface QueryParams {
  filter?: URLSearchParams;
  pagination?: PaginationParams;
}

export interface IHttpParams {
  url: string;
  method: Method;
  queryParams?: QueryParams;
  data?: unknown;
  headers?: HeadersContentType;
}
