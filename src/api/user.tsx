import apiClientIntercept from './apiClientIntercept';
import { AuthResponse, UserProfileResponse, TransactionPayload } from './types';

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

// 다른 사용자의 프로필 조회
export const getMemberProfile = async (
  username: string
): Promise<UserProfileResponse> => {
  try {
    const response = await apiClientIntercept.get<UserProfileResponse>(
      `/user/${username}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '프로필 정보를 불러오는 중 오류가 발생했습니다.'
    );
  }
};

// 잔고 조회
export const getBalance = async (
  username: string
): Promise<{ total: string }> => {
  try {
    const response = await apiClientIntercept.get<{ total: string }>(
      `/money/${username}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '잔고를 조회하는 중 오류가 발생했습니다.'
    );
  }
};

// 지출, 수입내역 조회
export const getTransactions = async <T = any,>(
  username: string
): Promise<T> => {
  try {
    const response = await apiClientIntercept.get<T>(
      `/money/${username}/history`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '잔고를 조회하는 중 오류가 발생했습니다.'
    );
  }
};

// 지출/수입 내역 추가
export const addTransaction: (
  username: string,
  data: TransactionPayload
) => Promise<void> = async (username, data) => {
  try {
    const response = await apiClientIntercept.post<void>(
      `/money/${username}/history`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '지출/수입 내역 추가 중 오류가 발생했습니다.'
    );
  }
};

// 지출/수입내역 삭제
export const deleteTransaction: (
  username: string,
  historyId: string
) => Promise<void> = async (username, historyId) => {
  try {
    const response = await apiClientIntercept.delete<void>(
      `/money/${username}/history/${historyId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '오류가 발생했습니다.');
  }
};

type TransactionUpdateData = Partial<{
  amount: string;
  memo: string;
  type: string;
  date: string;
}>;

// 지출/수입내역 수정
export const editTransaction: (
  username: string,
  historyId: string,
  data: TransactionUpdateData
) => Promise<void> = async (username, historyId, data) => {
  try {
    const response = await apiClientIntercept.put<void>(
      `/money/${username}/history/${historyId}`,
      data
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '지출/수입 내역 수정 중 오류가 발생했습니다.'
    );
  }
};

type UserProfileUpdateData = Partial<{
  bio: string;
  username: string;
  password: string;
}>;

export const updateUserProfile = async (
  data: UserProfileUpdateData
): Promise<UserProfileResponse> => {
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
