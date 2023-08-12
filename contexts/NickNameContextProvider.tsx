import React, { ReactNode, createContext, useState } from 'react';

interface NickNameProviderProps {
  children: ReactNode;
}

export const NickNameContext = createContext<null | {
  nickName: string | null;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export default function NickNameContextProvider({ children }: NickNameProviderProps) {
  const [nickName, setNickName] = useState('');

  return (
    <NickNameContext.Provider value={{ nickName, setNickName }}>
      {children}
    </NickNameContext.Provider>
  );
}
