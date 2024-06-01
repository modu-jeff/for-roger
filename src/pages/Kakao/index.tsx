import { KAKAO_AUTH_URL } from '@/OAuth';
import '@/pages/Kakao/kakao.css';

function KakaoLoginPage() {
  const goToKakao = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open(KAKAO_AUTH_URL, '_self');
  };
  return (
    <div>
      <div>
        <p className="login-title">간편하게 로그인하고</p>
        <p className="login-text">세상에 하나뿐인</p>
        <p className="login-text">특별한 친환경 상품을 발견해보세요</p>
      </div>
      <div className="button-wrapper">
        <button className="login-button" type="button" onClick={goToKakao}>
          <img className="kakao-login-img" src="/images/Login/kakaoLoginButton.png" alt="login-button" />
        </button>
      </div>
      {/* <img className="background-image" src="/images/Login/ecoFriendly.jpeg" alt="background image" /> */}
    </div>
  );
}

export default KakaoLoginPage;
