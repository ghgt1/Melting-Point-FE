import { TestContext } from '@/components/Contexts/TestContextProvider';
import { useContext } from 'react';

export function useTestContext() {
  const context = useContext(TestContext);

  if (!context) throw new Error('TestContextProvider를 찾을 수 없습니다!');

  const { result, setResult } = context;

  return { result, setResult };
}
