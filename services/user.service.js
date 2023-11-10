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
  const { serverSide } = options;
  if (serverSide) {
    return await axios.get(`http//:localhost:8000/api/v1/users/me`, {
      headers: { ...options },
      withCredentials: true,
    });
  }
  return await baseService(options).get(`${baseUrl}/me`);
};

export const userService = {
  getAll,
  getOneById,
  getCurrent,
};
