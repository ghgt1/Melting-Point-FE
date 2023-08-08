import React, { ReactNode, createContext, useState } from 'react';

interface TestContextProviderProps {
  children: ReactNode;
}

export const TestContext = createContext<null | {
  result: string | null;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export default function TestContextProvider({ children }: TestContextProviderProps) {
  const [result, setResult] = useState('');

  return <TestContext.Provider value={{ result, setResult }}>{children}</TestContext.Provider>;
}
