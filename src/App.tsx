import { GlobalStyle } from './GlobalStyle';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TestContextProvider from './contexts/TestContextProvider';
import NickNameContextProvider from './contexts/NickNameContextProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NickNameContextProvider>
          <TestContextProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools /> */}
          </TestContextProvider>
        </NickNameContextProvider>
      </QueryClientProvider>
    </>
  );
}
