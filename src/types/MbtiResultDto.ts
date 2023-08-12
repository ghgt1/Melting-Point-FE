export interface MbtiResultDto {
  user_mbti: string;
  user: User[];
}

interface User {
  img_id: number;
  nickname: string;
  choose_mbti: string;
}
