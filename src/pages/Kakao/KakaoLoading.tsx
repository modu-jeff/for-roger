import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendKakaoAuthCode } from '@/api/socialLogin';

function KakaoLoading() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  useEffect(() => {
    if (code) {
      sendKakaoAuthCode(code)
        .then((data) => {
          console.log(data);
          navigate('/');
        })
        .catch((err) => {
          console.error(err);
          navigate('/kakao');
        });
    } else {
      navigate('/kakao');
    }
  }, [code]);
  return <div>...loading</div>;
}

export default KakaoLoading;
