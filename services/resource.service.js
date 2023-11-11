import { baseService } from './base';
import axios from 'axios';

const baseUrl = '/resources';

const getAll = async (options = {}) => {
  const { headers, serverSide } = options;
  if (serverSide) {
    console.log("Calling service from server side");
    try {
      let res = await axios.get(`http://127.0.0.1:8000/api/v1/resources`, {
        headers: { ...headers },
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
  return await baseService(options).get(`${baseUrl}`);
};

const getOneById = async (id, options = {}) => {
  return await baseService(options).get(`${baseUrl}/${id}`);
};

const getOneSharedById = async (id, options = {}) => {
  return await baseService(options).get(`${baseUrl}/shared/${id}`);
};

export const resourceService = {
  getAll,
  getOneById,
  getOneSharedById,
};
