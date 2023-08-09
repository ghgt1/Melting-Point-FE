import { createBrowserRouter } from 'react-router-dom';
import { Main, CreateRoom, TestExplain, TestPage, TestResult } from './pages';
import { AnimateLayout } from './components';

const route = [
  {
    path: '/',
    element: <AnimateLayout />,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/create',
        element: <CreateRoom />,
      },
      {
        path: '/explain/:token',
        element: <TestExplain />,
      },
      {
        path: '/test/:token',
        element: <TestPage />,
      },
      {
        path: '/result/:token',
        element: <TestResult />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
