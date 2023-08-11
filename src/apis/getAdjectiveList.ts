import instance from './axios';
import { GET_USERS_ADJECTIVE_KEY } from '@/constants/querykey';
import { useQuery } from '@tanstack/react-query';
import { AdjectiveListDto } from '@/types/AdjectiveListDto';

export const getAdjectiveList = async (url: string): Promise<AdjectiveListDto[]> => {
  try {
    const res = await instance.get(`/adjective-expression/list/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useAdjectiveList = (url: string) => {
  return useQuery([GET_USERS_ADJECTIVE_KEY], () => getAdjectiveList(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
