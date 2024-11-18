import axios from "axios";

const apiClient = axios.create({
    // baseURL: 'http://localhost:8000/api'
    baseURL: 'https://fleket.vercel.app/api'
  });

  export default apiClient;