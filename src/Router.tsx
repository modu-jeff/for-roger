import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RogerPage from '@/pages/Roger';
import KakaoLoginPage from '@/pages/Kakao';
import KakaoLoading from '@/pages/Kakao/KakaoLoading';
import NaverLogin from '@/pages/Naver';
import NaverLoading from '@/pages/Naver/NaverLoading';

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
  {
    path: '/naver',
    element: <NaverLogin />,
  },
  {
    path: '/users/signin/naver',
    element: <NaverLoading />,
  },
];

const router = createBrowserRouter(routes);

export default router;
