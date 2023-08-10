import instance from './axios';
import { useQuery } from '@tanstack/react-query';
import { GET_ROOM_STATUS_KEY } from '@/constants/querykey';

interface UserDto {
  id: number;
  url_id: number;
  img_id: number;
  nickname: string;
}

interface RoomResponseInterface {
  userCount: number;
  userInfo: UserDto[];
}

export const getRoomStatus = async (url: string): Promise<RoomResponseInterface> => {
  try {
    const res = await instance.get(`/user-url/waiting-room/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useRoomStatus = (url: string) => {
  return useQuery([GET_ROOM_STATUS_KEY], () => getRoomStatus(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
