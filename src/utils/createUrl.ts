import { SERVICE_URL } from '@/constants/serviceUrl';

export const createUrl = (token: string) => {
  return `${SERVICE_URL}/explain/${token}`;
};
