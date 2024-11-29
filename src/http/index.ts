const _http = (url: string, option?: any) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, option);
};

export default _http;
