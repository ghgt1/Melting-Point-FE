import { createBrowserRouter } from 'react-router-dom';
import { Main, CreateRoom, TestExplain } from './pages';
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
        path: '/explain',
        element: <TestExplain />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
