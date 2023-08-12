import instance from './axios';
import { useQuery } from '@tanstack/react-query';
import { GET_MBTI_ORDER_KEY } from '@/constants/querykey';
import { MbtiOrderDto } from '@/types/MbtiOrderDto';

export const getMbtiOrder = async (url: string, round_id: number): Promise<MbtiOrderDto> => {
  try {
    const res = await instance.get(`/mbti`, {
      params: { url: url, round_id: round_id },
    });
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useMbtiOrder = (url: string, round_id: number) => {
  return useQuery([GET_MBTI_ORDER_KEY], () => getMbtiOrder(url, round_id), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
