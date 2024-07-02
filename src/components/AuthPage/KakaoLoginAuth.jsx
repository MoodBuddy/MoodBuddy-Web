import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoLoginAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get('code');
    const kakaoLogin = async () => {
      await axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/user/login/oauth2/code/kakao?code=${code}`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          localStorage.setItem('token', res.data.accessToken);

          console.log(res);
          navigate('/home');
        })
        .catch(() => {
          console.log('kakaoLogin Failed');
        });
    };
    kakaoLogin();
  }, []);
  return <div>로딩중</div>;
};
export default KakaoLoginAuth;
