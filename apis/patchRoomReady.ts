import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { PATCH_ROOM_READY_KEY } from '@/constants/querykey';

export const patchRoomReady = async (url: string) => {
  try {
    const res = await instance.patch(`/user-url/status/${url}`);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useRoomReady = (url: string) => {
  return useMutation([PATCH_ROOM_READY_KEY], () => patchRoomReady(url), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
  });
};
