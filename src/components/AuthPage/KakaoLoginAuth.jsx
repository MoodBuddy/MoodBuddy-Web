import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoLoginAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    const kakaoLogin = async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `http://localhost:8080/api/v1/user/login/oauth2/code/kakao?code=${code}`,
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        const { accessToken, refreshToken } = res.data;
        sessionStorage.setItem(
          'session',
          JSON.stringify({ token: accessToken }),
        );
        sessionStorage.setItem('i', refreshToken);
        navigate('/home');
      } catch (error) {
        console.log('kakaoLogin Failed', error);
      }
    };

    if (code) {
      kakaoLogin();
    }
  }, [navigate]);

  return <div>로딩중...</div>;
};

export default KakaoLoginAuth;
