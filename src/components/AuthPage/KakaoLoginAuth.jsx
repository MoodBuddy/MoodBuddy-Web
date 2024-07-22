import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/loading/LoadingSpinner';
import { getKakaoLogin } from '../../apis/user';

const KakaoLoginAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('로그인 하기');
    const kakaoLogin = async () => {
      try {
        const { accessToken, refreshToken } = await getKakaoLogin(code);
        sessionStorage.setItem(
          'session',
          JSON.stringify({ token: accessToken }),
        );
        sessionStorage.setItem('i', refreshToken);
        navigate('/home');
      } catch (error) {
        console.log('kakaoLogin Failed', error.message);
      }
    };

    if (code) {
      kakaoLogin();
    }
  }, [navigate]);

  return <LoadingSpinner />;
};

export default KakaoLoginAuth;
