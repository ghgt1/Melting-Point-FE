import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { PATCH_NEXT_QUESTION_KEY } from '@/constants/querykey';

type patchNextQuestionParams = {
  url: string;
  question_id: number;
};

export const patchNextQuestion = async (params: patchNextQuestionParams) => {
  try {
    const res = await instance.patch(`/public-question/public-question`, params);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useNextQuestion = (params: patchNextQuestionParams) => {
  return useMutation([PATCH_NEXT_QUESTION_KEY], () => patchNextQuestion(params), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
