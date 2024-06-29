import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function KakaoAuth() {
  const navigate = useNavigate();
  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get('code');
    const res = axios.post(
      'https://kauth.kakao.com/auth/token',
      {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_REST_API_KEY,
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        code: token,
      },
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
    return res;
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res) {
          localStorage.setItem('token', JSON.stringify(res.data.access_token));
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>로딩중 ...</div>;
}

export default KakaoAuth;
