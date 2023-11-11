export const API_URL = "/api/v1"
  // process.env.NODE_ENV === "production"
  //   ? "api/v1"
  //   : "http://127.0.0.1:8000/api/v1";

export const STATIC_URL =
  process.env.NODE_ENV === "production"
    ? "static"
    : "http://127.0.0.1:8000/static";

export const CLIENT_URL =
  process.env.NODE_ENV === "production" ? "" : "http://127.0.0.1:3000";
