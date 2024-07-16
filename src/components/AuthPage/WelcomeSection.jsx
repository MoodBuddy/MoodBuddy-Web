import happyQuddy from '@assets/happyQuddy.svg';
import calmQuddy from '@assets/calmQuddy.svg';
import surpriseQuddy from '@assets/surpriseQuddy.svg';
import angryQuddy from '@assets/angryQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import kakaoIcon from '../../../public/icon/kakaoIcon.svg';
import Button from '../common/button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
  const CLIENT_ID = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EDE2DA]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-meetme text-3xl">MOODBUDDY</h1>
        <h1 className="font-meetme text-6xl">
          쿼디와 함께 자신의 생각과 고민을 행복하게 정리해봐요 !
        </h1>
      </div>

      <div className="flex items-end gap-10 my-12">
        <img
          src={angryQuddy}
          alt="angryQuddy"
          className="w-[152px] h-[160px]"
        />
        <img
          src={surpriseQuddy}
          alt="surpriseQuddy"
          className="w-[202px] h-[214px]"
        />
        <img
          src={happyQuddy}
          alt="happyQuddy"
          className="w-[226px] h-[239px]"
        />
        <img src={calmQuddy} alt="calmQuddy" className="w-[202px] h-[214px]" />
        <img
          src={gloomyQuddy}
          alt="gloomyQuddy"
          className="w-[152px] h-[160px]"
        />
      </div>

      <div className="flex flex-col items-end gap-[20px]">
        <div className="flex gap-[53px]">
          <div className="font-medium text-[24px] w-[88px] ">아이디</div>
          <input
            className="border-[1px] border-black p-[10px] w-[390px] h-[40px] rounded-[7px]"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </div>
        {/* <div className="flex gap-[53px]">
          <div className="font-medium text-[24px] w-[88px]">비밀번호</div>
          <input
            className="border-[1px] border-black p-[10px] w-[390px] h-[40px] rounded-[7px]"
            type="text"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div> */}
        <button
          className="mt-[15px] w-[145px] h-[45px] bg-[#AC7544] text-[#FFFFFF] text-medium font-[20px] rounded-[8px]"
          onClick={handleLogin}
        >
          로그인
        </button>
      </div>
      {/* <a href={kakaoURL}>
        <Button
          color="brown"
          className="w-[479px] h-[96px] flex justify-center rounded-[13px] items-center gap-6 mt-6"
        >
          <img src={kakaoIcon} alt="kakaoIcon" />
          <p className="font-semibold text-[25px]">1초 카카오톡 간편 로그인</p>
        </Button>
          </a>
        */}
    </div>
  );
};

export default WelcomeSection;
