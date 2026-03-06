interface CustomAxiosErrorResponse {
  message: string;
  statusCode: number;
}

export interface AxiosErrorResponse extends CustomAxiosErrorResponse {
  errors: { field: string; message: string }[];
  stack: null;
}

interface BaseAPIResponse {
  message: string;
  statusCode: number;
  success?: boolean;
}

export interface OnboardResponse extends BaseAPIResponse {
  data: null;
}
