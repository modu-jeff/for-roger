export async function sendKakaoAuthCode(code: string) {
  console.log('code', code);
  const response = await fetch('http://localhost:4000/auth/login/kakao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const data = await response.json();
  return data;
}

export async function sendNaverAuthCode(code: string, state: string) {
  console.log('code', code);
  console.log('state', state);
  const response = await fetch('http://localhost:4000/auth/login/naver', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, state }),
  });
  const data = await response.json();
  return data;
}
