import { createBrowserRouter } from 'react-router-dom';
import { Main, CreateRoom } from './pages';
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
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
