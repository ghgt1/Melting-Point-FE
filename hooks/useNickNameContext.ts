import { NickNameContext } from '@/contexts/NickNameContextProvider';
import { useContext } from 'react';

export function useNickNameContext() {
  const context = useContext(NickNameContext);

  if (!context) throw new Error('NickNameContextProvider를 찾을 수 없습니다!');

  const { nickName, setNickName } = context;

  return { nickName, setNickName };
}
