import instance from './axios';
import { useQuery } from '@tanstack/react-query';
import { GET_GAME_START_KEY } from '@/constants/querykey';

export const getGameStart = async (url: string): Promise<boolean> => {
  try {
    const res = await instance.get(`/user-url/check-url/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useGameStart = (url: string) => {
  return useQuery([GET_GAME_START_KEY], () => getGameStart(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
