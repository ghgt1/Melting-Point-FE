import { GlobalStyle } from './GlobalStyle';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestContextProvider from './contexts/TestContextProvider';
import NickNameContextProvider from './contexts/NickNameContextProvider';
import { Suspense } from 'react';
import { LoadingOverlay } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NickNameContextProvider>
          <TestContextProvider>
            <GlobalStyle />
            <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
              <RouterProvider router={router} />
            </Suspense>
          </TestContextProvider>
        </NickNameContextProvider>
      </QueryClientProvider>
    </>
  );
}
