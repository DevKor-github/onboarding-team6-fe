import apiClientIntercept from './apiClientIntercept';
import { Member, Room } from './types';

// 채팅방 생성
export const createRoom: (
  roomName: string,
  ownerId: string
) => Promise<void> = async (roomName, ownerId) => {
  try {
    const response = await apiClientIntercept.post<void>('/room', {
      roomName,
      ownerId,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '새로운 채팅방 생성 중 오류가 발생했습니다.'
    );
  }
};

// 채팅방목록 조회
export const getRoomList: () => Promise<Room[]> = async () => {
  try {
    const response = await apiClientIntercept.get<Room[]>('/room');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '채팅방 조회 중 오류가 발생했습니다.'
    );
  }
};

// 이름으로 채팅방 조회
export const getRoomById = async (id: string): Promise<Room> => {
  try {
    const response = await apiClientIntercept.get<Room>(`/room/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '채팅방을 조회하는 중 오류가 발생했습니다.'
    );
  }
};

// 채팅방 이름 수정
export const editRoomName = async (
  id: string,
  roomName: string
): Promise<void> => {
  try {
    const response = await apiClientIntercept.put<void>(`/room/${id}`, {
      roomName,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        '채팅방 이름을 수정하는 중 오류가 발생했습니다.'
    );
  }
};

// 채팅방 삭제
export const deleteRoom = async (id: string): Promise<void> => {
  try {
    const response = await apiClientIntercept.delete<void>(`/room/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '채팅방 삭제 중 오류가 발생했습니다.'
    );
  }
};

// 채팅방 입장
export const joinRoom = async (id: string, userId: string): Promise<void> => {
  try {
    const response = await apiClientIntercept.put<void>(`/room/${id}/join`, {
      userId,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '채팅방 참가 중 오류가 발생했습니다.'
    );
  }
};

export const leaveRoom = async (id: string, userId: string): Promise<void> => {
  try {
    const response = await apiClientIntercept.put<void>(`/room/${id}/leave`, {
      userId,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || '채팅방 탈퇴 중 오류가 발생했습니다.'
    );
  }
};
