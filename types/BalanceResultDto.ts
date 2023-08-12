export interface BalanceResultDTO {
  user: User[];
  percent: string[];
}

interface User {
  url_id: number;
  img_id: number;
  nickname: string;
  balance_type: string;
}
