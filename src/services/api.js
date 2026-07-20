import axios from "axios";
import { Vault } from "./vault";

// When you eventually spin up your Node server, you will replace this
// with your actual local IP address (e.g., http://192.168.1.xxx:5000)
const BASE_URL = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// The Request Interceptor: Runs automatically before every fetch
apiClient.interceptors.reqest.use(
  async (config) => {
    const token = await Vault.getToken();

    if (token) {
      // If a token exists in the hardware vault, attach it to the header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// The Response Interceptor: Catches global errors (like expired tokens)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // If the backend says our token is dead (401 Unauthorized)
    if (error.response && error.response.status === 401) {
      console.log("[Arco API] Token expired or invalid. Evicting user...");
      await Vault.destroyToken();
      // In a full production app, would also trigger a Zustand state
      // update here to force the UI back to the Auth screen.
    }
    return Promise.reject(error);
  },
);

export default apiClient;
