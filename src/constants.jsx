export const BACKEND_URL =
  import.meta.env.VITE_SOME_NODE_ENV === "production"
    ? import.meta.env.VITE_SOME_BACKEND_URL
    : "http://localhost:3000";
