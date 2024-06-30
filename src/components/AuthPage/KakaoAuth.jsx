import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoAuth() {
  const navigate = useNavigate();
  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get('code');
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', import.meta.env.VITE_REST_API_KEY);
    params.append('redirect_uri', import.meta.env.VITE_REDIRECT_URL);
    params.append('code', token);
    const res = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return res;
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res) {
          console.log(res.data);
          localStorage.setItem('token', JSON.stringify(res.data.access_token));
          navigate('/home');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>로딩중 ...</div>;
}

export default KakaoAuth;
