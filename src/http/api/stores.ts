import _http from "@http/index.ts";

export const Get_StoresListAPI = () => {
  return _http(`/api/v1.0/stores/`);
};
