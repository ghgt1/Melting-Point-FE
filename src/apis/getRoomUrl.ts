import instance from './axios';
import { CREATE_ROOM_URL_KEY } from '@/constants/querykey';
import { useQuery } from '@tanstack/react-query';

export const getRoomUrl = async (): Promise<string> => {
  try {
    const res = await instance.get(`/user-url`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useRoomUrl = () => {
  return useQuery([CREATE_ROOM_URL_KEY], () => getRoomUrl(), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
    refetchOnWindowFocus: false,
  });
};
