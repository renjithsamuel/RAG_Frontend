import axios from "axios";
import { QueryClient, DefaultOptions } from "react-query";
import { Cookie } from "doc-bot/utils/cookies";

const queryClientOptions: DefaultOptions = {
  queries: {
    cacheTime: 10 * 60 * 1000, // 10 minutes
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryClientOptions,
});

export const PublicAxios = axios.create({
  // baseURL: "http://localhost:8000/ilm-service/v1/",
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const PrivateAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:8000",
  headers: {
    authorization: `Bearer ${Cookie.access_token}`,
    "Content-Type": "application/json",
  },
});

// export const MistralAIAxios = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_MISTRAL_API_KEY,
//   // baseURL: "https://www.googleapis.com/books",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
