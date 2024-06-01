export async function sendKakaoAuthCode(code: string) {
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
