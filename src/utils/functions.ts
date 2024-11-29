export const ContextDisplay_Utils = (
  txt: string | number | undefined | null,
) => {
  return txt ? `${txt}` : "_";
};

export const StatusSuccess_Utils = (status?: number) => {
  let statusSuccess = [200, 201, 204];
  return statusSuccess.some((i) => i === status);
};