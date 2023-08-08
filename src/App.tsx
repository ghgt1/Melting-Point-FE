import { GlobalStyle } from './GlobalStyle';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TestContextProvider from './components/Contexts/TestContextProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TestContextProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </TestContextProvider>
      </QueryClientProvider>
    </>
  );
}
