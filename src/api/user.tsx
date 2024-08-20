import apiClientIntercept from './apiClientIntercept';
import { UserProfileResponse } from './types';

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

// 프로필 정보를 수정하는 함수
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
