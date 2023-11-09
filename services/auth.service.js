import { baseService } from './base';
import axios from 'axios';
import { API_URL } from '../config';

const baseUrl = `${API_URL}/auth`;

const login = async (credentials) => {
  console.log(baseUrl)
  const formData = new FormData();
  formData.append('username', credentials.username);
  formData.append('password', credentials.password);

  const options = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return await baseService(options).post(`${baseUrl}/login`, formData);
};

const logout = async () => {
  return await baseService().get(`${baseUrl}/logout`);
};

const mintRestrictedMacaroon = async (data) => {
  return await baseService().post(
    `${baseUrl}/token/macaroon/add_caveats`,
    data
  );
};

export const authService = {
  login,
  logout,
  mintRestrictedMacaroon
};
