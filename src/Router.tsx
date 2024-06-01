import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RogerPage from '@/pages/Roger';
import KakaoLoginPage from '@/pages/Kakao';
import KakaoLoading from '@/pages/Kakao/KakaoLoading';

import './App.css';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RogerPage />,
  },
  {
    path: '/kakao',
    element: <KakaoLoginPage />,
  },
  {
    path: '/users/signin/kakao',
    element: <KakaoLoading />,
  },
];

const router = createBrowserRouter(routes);

export default router;
