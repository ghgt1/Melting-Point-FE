import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { POST_ADJECTIVE_USER_KEY } from '@/constants/querykey';

type postAdjectiveParams = {
  url: string;
  user_id: number;
  expression_id: number[];
};

export const postAdjective = async (params: postAdjectiveParams) => {
  try {
    const res = await instance.post(`/adjective-expression`, params);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useAdjective = (params: postAdjectiveParams) => {
  return useMutation([POST_ADJECTIVE_USER_KEY], () => postAdjective(params), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
