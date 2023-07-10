import { API_URLS } from '../constants';
import { handleApiCall } from '../lib/utils';
import api from './axios';

export const signup = async (data: {
  email: string;
  username: string;
  password: string;
  invitationToken?: string | null;
}) => {
  return handleApiCall(api.post, API_URLS.AUTH_SIGNUP, data);
};

export const signin = async (data: {
  identifier: string;
  password: string;
}) => {
  return handleApiCall(api.post, API_URLS.AUTH_SIGNIN, data);
};

export const verify = async (data: { verificationToken: string }) => {
  return handleApiCall(api.post, API_URLS.AUTH_VERIFY, data);
};

export const confirmEmail = async (data: { confirmationToken: string }) => {
  return handleApiCall(api.post, API_URLS.AUTH_CONFIRM_EMAIL, data);
};