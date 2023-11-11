import { baseService } from "./base";
import axios from "axios";

const baseUrl = "/users";

const getAll = async (options = {}) => {
  return await baseService(options).get(`${baseUrl}`);
};

const getOneById = async (id, options = {}) => {
  return await baseService(options).get(`${baseUrl}/${id}`);
};

const getCurrent = async (options = {}) => {
  const { headers, serverSide } = options;
  if (serverSide) {
    try {
      console.log("Using fetch here!")
      const response = await fetch("https://127.0.0.1:8000/api/v1/users/me", {
        method: "GET",
        headers: {
          ...headers,
          Credentials: "include", // This is equivalent to Axios' withCredentials: true
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return await baseService(options).get(`${baseUrl}/me`);
};

export const userService = {
  getAll,
  getOneById,
  getCurrent,
};
