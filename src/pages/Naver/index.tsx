import { NAVER_AUTH_URL } from '@/OAuth';

function NaverLogin() {
  const onNaverLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open(NAVER_AUTH_URL, '_self');
  };

  return (
    <button onClick={onNaverLogin} type="button" style={{ width: '100%', height: '100%' }}>
      Login Naver
    </button>
  );
}

export default NaverLogin;
