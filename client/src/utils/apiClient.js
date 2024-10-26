import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api'
    // baseURL: 'https://shop-six-red.vercel.app/api'
  });

  export default apiClient;