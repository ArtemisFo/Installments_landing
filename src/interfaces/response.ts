export interface GetListResAPIType<T> {
  code: number;
  message: string | null;
  result: boolean;
  data: T[];
}

export interface StoresResObjAPIType {
  location_longitude: string | null;
  location_latitude: string | null;
  address: string | null;
  category_type: { id: number; title: string | null };
  city: { id: number; title: string | null; cities: any[] };
  files: any[];
  latitude: string | null;
  longitude: string | null;
  title: string | null;
}
