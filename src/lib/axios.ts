import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_URL ?? "https://localhost:7171",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use(
//   (request) => {
//     // Need to store token in http cookies soon.
//     if (typeof window !== undefined) {
//       //   const token = localStorage.getItem("accessToken");
//       //   console.log(document.cookie);
//       //   if (token) request.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response: handle 401/403 globally
// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response?.status === 401 || err.response?.status === 403) {
//       window.location.href = "/login"; // or show toast, etc.
//     }
//     return Promise.reject(err);
//   }
// );
