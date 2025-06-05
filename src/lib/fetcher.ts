// lib/fetcher.ts
import { axiosInstance } from "./axios";

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get<T>(url);
  return response.data;
};
