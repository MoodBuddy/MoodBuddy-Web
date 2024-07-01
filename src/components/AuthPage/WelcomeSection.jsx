import happyQuddy from '@assets/happyQuddy.svg';
import calmQuddy from '@assets/calmQuddy.svg';
import surpriseQuddy from '@assets/surpriseQuddy.svg';
import angryQuddy from '@assets/angryQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import kakaoIcon from '../../../public/icon/kakaoIcon.svg';
import Button from '../common/button/Button';
import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
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

      <Button
        onClick={handleClick}
        color="brown"
        className="w-[450px] h-[84px] flex justify-center rounded-[13px] items-center gap-6 mt-6"
      >
        <img src={kakaoIcon} alt="kakaoIcon" />
        <p className="font-semibold text-[25px]">1초 카카오톡 간편 로그인</p>
      </Button>
    </div>
  );
};

export default WelcomeSection;
