import instance from './axios';
import { useQuery } from '@tanstack/react-query';
import { GET_MBTI_RESULT_KEY } from '@/constants/querykey';
import { MbtiResultDto } from '@/types/MbtiResultDto';

export const getMbtiResult = async (url: string, round_id: number): Promise<MbtiResultDto> => {
  try {
    const res = await instance.get(`/mbti/result`, {
      params: { url: url, round_id: round_id },
    });
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useMbtiResult = (url: string, round_id: number) => {
  return useQuery([GET_MBTI_RESULT_KEY], () => getMbtiResult(url, round_id), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
