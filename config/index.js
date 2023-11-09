export const API_URL =
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:8000/api/v1";

export const STATIC_URL =
  process.env.NODE_ENV === "production"
    ? "static"
    : "http://localhost:8000/static";

export const CLIENT_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";
