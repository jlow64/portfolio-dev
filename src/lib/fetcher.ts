import { XiorError } from "xior";
import { xiorInstance } from "./xior";

export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await xiorInstance.get<T>(url);
    return response.data;
  } catch (error) {
    // Catch any XIOR errors, else catch errors generally
    if (error instanceof XiorError) {
      throw {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        original: error,
      };
    }
    throw {
      message: "An unexpected error occurred.",
      original: error,
    };
  }
};
