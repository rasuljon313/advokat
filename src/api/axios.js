// import axios from "axios";
// const axiosLogin = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`, 
//   },
// });

// export default axiosLogin;

import axios from "axios";

const axiosLogin = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,  // Your base URL from the environment variable
});

// Request Interceptor to add Authorization header dynamically
axiosLogin.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenxon");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Add the token to the request
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosLogin;
