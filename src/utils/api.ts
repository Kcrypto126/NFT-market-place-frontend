interface Options {
  [key: string]: string;
}

export const getRequest = async <DataType>(url: string): Promise<DataType> => {
  return request<DataType>(url, 'GET', 'Failed to fetch data');
};

export const request = async <DataType>(
  url: string,
  reqMethod: string,
  errorMessage: string,
  options?: Options
): Promise<DataType> => {
  const res = await fetch(url, { method: reqMethod, ...options });

  if (!res.ok) {
    console.error(errorMessage);
  }

  return res.json();
};
