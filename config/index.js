export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://macaroons-demo-next-13.vercel.app/api/v1"
    : "http://localhost:8000/api/v1";

export const STATIC_URL =
  process.env.NODE_ENV === "production"
    ? "https://macaroons-demo-next-13.vercel.app/api/v1/static"
    : "http://localhost:8000/api/v1/static";

export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://macaroons-demo-next-13.vercel.app"
    : "http://localhost:3000";
