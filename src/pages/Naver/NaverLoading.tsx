import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendNaverAuthCode } from '@/api/socialLogin';

function NaverLoading() {
  const navigate = useNavigate();
  const location = useLocation();

  const code = new URLSearchParams(location.search).get('code');
  const state = new URLSearchParams(location.search).get('state');

  // useEffect(() => {
  //   sendNaverAuthCode().then((res) => navigate(res.url));
  // }, []);

  useEffect(() => {
    if (code && state) {
      sendNaverAuthCode(code, state)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      navigate('/');
    } else {
      navigate('/naver');
    }
  }, []);
  return <div>...Naver Loading</div>;
}

export default NaverLoading;
