import apiClientIntercept from './apiClientIntercept';
import { AuthResponse, UserProfileResponse } from './types';

// 프로필 정보 조회
export const getUserProfile = async (): Promise<UserProfileResponse> => {
  try {
    const response =
      await apiClientIntercept.get<UserProfileResponse>('/user/me');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '프로필 정보를 불러오는 중 오류가 발생했습니다.'
    );
  }
};

// 프로필 정보 수정
export const updateUserProfile = async (data: {
  bio: string;
  username: string;
  password: string;
}): Promise<UserProfileResponse> => {
  try {
    const response = await apiClientIntercept.put<UserProfileResponse>(
      '/user/me',
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '프로필 정보를 수정하는 중 오류가 발생했습니다.'
    );
  }
};

// 탈퇴
export const withdraw = async (): Promise<AuthResponse> => {
  try {
    const response = await apiClientIntercept.delete<AuthResponse>('/user/me');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '프로필 정보를 수정하는 중 오류가 발생했습니다.'
    );
  }
};
