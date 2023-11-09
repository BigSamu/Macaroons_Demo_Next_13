import { baseService } from './base';

const baseUrl = '/resources';

const getAll = async (options = {}) => {
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
