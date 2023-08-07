import { GlobalStyle } from './GlobalStyle';
import router from './Router';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
