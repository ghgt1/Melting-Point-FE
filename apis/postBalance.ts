import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { POST_BALANCE_USER_KEY } from '@/constants/querykey';

type postBalanceParams = {
  url: string;
  balance_id: number;
  user_id: number;
  type: string;
};

export const postBalance = async (params: postBalanceParams) => {
  try {
    const res = await instance.post(`/balance-game`, params);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useBalance = (params: postBalanceParams) => {
  return useMutation([POST_BALANCE_USER_KEY], () => postBalance(params), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
