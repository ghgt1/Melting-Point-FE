import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { POST_MBTI_USER_KEY } from '@/constants/querykey';

type postMbtiParams = {
  url: string;
  user_id: number;
  round_id: number;
  mbti: string;
  to_user_id: number;
};

export const postMbti = async (params: postMbtiParams) => {
  try {
    const res = await instance.post(`/mbti`, params);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useMbti = (params: postMbtiParams) => {
  return useMutation([POST_MBTI_USER_KEY], () => postMbti(params), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
