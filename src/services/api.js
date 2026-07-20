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

// The Request Interceptor: Ru