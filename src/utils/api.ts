import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { ApiResponse } from '@/types/response.type';

export function postRequest<ResponseData>(
  url: string,
  data: ResponseData,
  noCaching?: boolean,
  includeCredentials = false
) {
  let options = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  } as RequestInit;

  if (includeCredentials) {
    options = {
      ...options,
      credentials: 'include',
    };
  }

  return request<ResponseData>(url, options, noCaching);
}

export function getRequest(url: string, noCaching?: boolean) {
  return request(
    url,
    {
      method: 'GET',
    },
    noCaching
  );
}

const request = async <ResponseData>(
  url: string,
  options: RequestInit,
  noCaching = false
): Promise<ApiResponse<ResponseData>> => {
  try {
    const fetchOptions = { ...options };

    if (noCaching) {
      fetchOptions.cache = 'no-store';
    }

    const request = await fetch(url, fetchOptions);
    const response = await request.json();

    if (response.error) {
      throw new Error(response.error);
    }

    return response;
  } catch (error) {
    return { error: 'An unexpected error occurred' };
  }
};
