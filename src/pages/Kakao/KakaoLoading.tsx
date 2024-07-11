import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { sendKakaoAuthCode } from '@/api/socialLogin';

function KakaoLoading() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      sendKakaoAuthCode(code)
        .then((data) => {
          if (!data.ok) {
            throw new Error(data.statusText);
          }
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
