import { createBrowserRouter } from 'react-router-dom';
import {
  Main,
  CreateRoom,
  TestExplain,
  TestPage,
  TestResult,
  GameLobby,
  GameExplain,
  Adjective,
  AdjectiveResult,
} from './pages';
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
  {
    path: '/game',
    element: <AnimateLayout />,
    errorElement: <div>Error page</div>,
    children: [
      {
        path: ':userId/:token',
        element: <GameExplain />,
      },
      {
        path: 'lobby/:userId/:token',
        element: <GameLobby />,
      },
      {
        path: 'adjective/:userId/:token',
        element: <Adjective />,
      },
      {
        path: 'adjective/result/:userId/:token',
        element: <AdjectiveResult />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
