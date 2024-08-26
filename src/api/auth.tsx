import apiClient from './apiClient';
import { RegisterPayload, LoginPayload, AuthResponse } from './types';
import { setCookies } from './token';

// 회원가입
export const registerUser: (
  data: RegisterPayload
) => Promise<AuthResponse> = async (data) => {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);

    const { access_token, refresh_token } = response.data;
    setCookies(access_token, refresh_token);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '회원가입 중 오류가 발생했습니다.'
    );
  }
};

// 로그인
export const loginUser: (data: LoginPayload) => Promise<AuthResponse> = async (
  data
) => {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);

    const { access_token, refresh_token } = response.data;
    setCookies(access_token, refresh_token);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '로그인 중 오류가 발생했습니다.'
    );
  }
};

// 잔고 초기화
export const initBalance: (
  username: string,
  total: string
) => Promise<void> = async (username, total) => {
  try {
    await apiClient.post<void>(`/money/${username}`, { total });
    console.log('잔고 초기화 성공');
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '잔고 초기화 중 오류가 발생했습니다.'
    );
  }
};
