import instance from './axios';
import { GET_BALANCE_USER_KEY } from '@/constants/querykey';
import { useQuery } from '@tanstack/react-query';
import { BalanceResultDTO } from '@/types/BalanceResultDto';

export const getBalanceList = async (url: string, number: number): Promise<BalanceResultDTO> => {
  try {
    const res = await instance.get(`/balance-game`, { params: { url: url, balance_id: number } });
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useBalanceList = (url: string, number: number) => {
  return useQuery([GET_BALANCE_USER_KEY], () => getBalanceList(url, number), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
