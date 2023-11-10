import { baseService } from './base';

const baseUrl = '/users';

const getAll = async (options = {}) => {
  return await baseService(options).get(`${baseUrl}`);
};

const getOneById = async (id, options = {}) => {
  return await baseService(options).get(`${baseUrl}/${id}`);
};

const getCurrent = async (options = {}) => {
  const {serverSide} = options;
  if (serverSide){
    baseUrl = 'localhost:8000/api/users'
  }
  return await baseService(options).get(`${baseUrl}/me`);
};

export const userService = {
  getAll,
  getOneById,
  getCurrent,
};
