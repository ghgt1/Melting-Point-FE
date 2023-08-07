import { createBrowserRouter } from 'react-router-dom';
import { Main } from '@/pages';

const route = [
  {
    path: '',
    element: <Main />,
    errorElement: <div>Error page</div>,
    // children: [
    //   {
    //     path: '',
    //     element: <IssueList />,
    //   },
    //   {
    //     path: 'issues/:id',
    //     element: <IssueDetail />,
    //   },
    // ],
  },
];

const router = createBrowserRouter(route);

export default router;
