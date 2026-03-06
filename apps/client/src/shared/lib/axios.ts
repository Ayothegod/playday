/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import type { AxiosErrorResponse } from "./types";
import clientEnv from "./clientEnv";

const api = axios.create({
  baseURL: clientEnv.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function isAxiosErrorWithResponse(
  error: unknown,
): error is AxiosError<AxiosErrorResponse> {
  return axios.isAxiosError(error) && error.response !== undefined;
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500;

    if (error.response) {
      const data = error.response.data as any;
      errorMessage = data?.message || errorMessage;
      statusCode = error.response.status;

      console.error(`Backend Error [${statusCode}]:`, errorMessage);
    } else if (error.request) {
      errorMessage = "No response from server. Check your internet connection.";
    } else {
      errorMessage = error instanceof Error ? error.message : String(error);
    }

    return Promise.reject({ message: errorMessage, statusCode });
    // return Promise.reject(error);
  },
);

export default api;
