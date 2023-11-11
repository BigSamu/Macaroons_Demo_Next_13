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
    let res = await axios.get(`https://localhost:8000/api/v1/users/me`, {
      headers: { ...headers },
      withCredentials: true,
    });
    return res.data
  }
  return await baseService(options).get(`${baseUrl}/me`);
};

export const userService = {
  getAll,
  getOneById,
  getCurrent,
};
