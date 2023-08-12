import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AnimateLayout } from './components';
const Main = lazy(() => import('./pages/Main/Main.tsx'));
const CreateRoom = lazy(() => import('./pages/CreateRoom/CreateRoom.tsx'));
const TestExplain = lazy(() => import('./pages/TestExplain/TestExplain.tsx'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage.tsx'));
const TestResult = lazy(() => import('./pages/TestResult/TestResult.tsx'));
const GameLobby = lazy(() => import('./pages/GameLobby/GameLobby.tsx'));
const GameExplain = lazy(() => import('./pages/GameExplain/GameExplain.tsx'));
const Adjective = lazy(() => import('./pages/Adjective/Adjective.tsx'));
const AdjectiveResult = lazy(() => import('./pages/AdjectiveResult/AdjectiveResult.tsx'));
const Question = lazy(() => import('./pages/Question/Question.tsx'));
const Balance = lazy(() => import('./pages/Balance/Balance.tsx'));
const BalanceResult = lazy(() => import('./pages/BalanceResult/BalanceResult.tsx'));
const Mbti = lazy(() => import('./pages/Mbti/Mbti.tsx'));
const MbtiResult = lazy(() => import('./pages/MbtiResult/MbtiResult.tsx'));
const FinalResult = lazy(() => import('./pages/FinalResult/FinalResult.tsx'));

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
      {
        path: 'question/:userId/:token',
        element: <Question />,
      },
      {
        path: 'balance/:userId/:token/:number',
        element: <Balance />,
      },
      {
        path: 'balance/result/:userId/:token/:number',
        element: <BalanceResult />,
      },
      {
        path: 'mbti/:userId/:token/:number',
        element: <Mbti />,
      },
      {
        path: 'mbti/result/:userId/:token/:number',
        element: <MbtiResult />,
      },
      {
        path: 'final/result/:token',
        element: <FinalResult />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
