import xior from "xior";

// Check if call is made on server first
const isServer = typeof window === "undefined";
const baseUrl = isServer
  ? process.env.NEXT_PUBLIC_API_URL
  : "https://localhost:7171";

export const xiorInstance = xior.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: true,
  cache: "no-store",
});

xiorInstance.interceptors.request.use(
  (request) => {
    // Need to store token in http cookies soon.
    if (typeof window !== undefined) {
      //   const token = localStorage.getItem("accessToken");
      //   console.log(document.cookie);
      //   if (token) request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Response: handle 401/403 globally
xiorInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      window.location.href = "/login"; // or show toast, etc.
    }
    return Promise.reject(err);
  }
);
