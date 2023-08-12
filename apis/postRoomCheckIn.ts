import instance from './axios';
import { useMutation } from '@tanstack/react-query';
import { POST_ROOM_CHECKIN_KEY } from '@/constants/querykey';
import { useNavigate } from 'react-router-dom';

type createRoomParams = {
  img_id: number;
  nickname: string;
  url: string;
};

export const postRoomCheckIn = async (params: createRoomParams) => {
  try {
    const res = await instance.post(`/user-url/check-in`, params);
    return res.data;
  } catch (error) {
    console.error('요청중 에러가 발생하였습니다:', error);
    throw error;
  }
};

export const useRoomCheckIn = (params: createRoomParams) => {
  const navigate = useNavigate();
  return useMutation([POST_ROOM_CHECKIN_KEY], () => postRoomCheckIn(params), {
    onError: (error) => {
      console.error('Query 처리중 에러가 발생하였습니다:', error);
    },
    onSuccess: (data) => {
      navigate(`/game/${data.user_id}/${params.url}`);
    },
  });
};
