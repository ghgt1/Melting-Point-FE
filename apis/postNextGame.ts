import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { POST_NEXT_GAME_KEY } from '@/constants/querykey';

export const postNextGame = async (url: string) => {
  try {
    const res = await instance.post(`/user-url/next/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useNextGame = (url: string) => {
  return useMutation([POST_NEXT_GAME_KEY], () => postNextGame(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
