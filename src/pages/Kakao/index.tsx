import { KAKAO_AUTH_URL } from '@/OAuth';
import '@/pages/Kakao/kakao.css';

function KakaoLoginPage() {
  const goToKakao = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open(KAKAO_AUTH_URL, '_self');
  };
  return (
    <div className="button-wrapper">
      <button className="login-button" type="button" onClick={goToKakao}>
        <img className="kakao-login-img" src="/images/Login/kakaoLoginButton.png" alt="login-button" />
      </button>
    </div>
  );
}

export default KakaoLoginPage;
