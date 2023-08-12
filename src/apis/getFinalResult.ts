import instance from './axios';
import { useQuery } from '@tanstack/react-query';
import { GET_FINAL_RESULT_KEY } from '@/constants/querykey';
import { FinalUserDTO } from '@/types/FinalResultDto';

export const getFinalResult = async (url: string): Promise<FinalUserDTO[]> => {
  try {
    const res = await instance.get(`/mbti/final/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useFinalResult = (url: string) => {
  return useQuery([GET_FINAL_RESULT_KEY], () => getFinalResult(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
