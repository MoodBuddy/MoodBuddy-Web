import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { Link } from 'react-router-dom';
import helloQuddy from '@assets/helloQuddy.svg';
import calendarFlower from '@assets/calendarFlower.svg';
import calendarRainbow from '@assets/calendarRainbow.svg';
import useUserStore from '../../../store/userStore';

const CalendarCard = () => {
  const userInfo = useUserStore((state) => ({
    profileNickName: state.profileNickName,
  }));

  const profileNickName = userInfo.profileNickName;

  return (
    <div className="relative flex justify-end mt-24 mb-36">
      {/* 좌측 쿼디 이미지 */}
      <div className="hidden xl:block absolute left-[250px] top-[40%] transform -translate-y-1/2 z-0">
        <img src={helloQuddy} alt="helloQuddy" className="w-auto h-auto" />
      </div>

      {/* 클로버 이미지 */}
      <div className="hidden xl:block absolute right-[1080px] top-[3%] transform -translate-y-1/2 z-20">
        <img
          src={calendarFlower}
          alt="calendarFlower"
          className="w-[85%] h-[85%]"
        />
      </div>
      <div className="hidden xl:block absolute right-[-60px] bottom-[-150px] transform -translate-y-1/2 z-20">
        <img
          src={calendarFlower}
          alt="calendarFlower"
          className="w-[70%] h-[70%]"
        />
      </div>

      {/* 무지개 이미지 */}
      <div className="hidden xl:block absolute right-[-40px] top-[14%] transform -translate-y-1/2 z-20">
        <img
          src={calendarRainbow}
          alt="calendarRainbow"
          className="w-[70%] h-[70%]"
        />
      </div>

      <div className="relative bg-[#EEEDE6] p-8 rounded-l-[66px] shadow-lg z-10">
        <h1 className="font-meetme text-5xl flex justify-center mt-8">
          {profileNickName
            ? '님의 캘린더를 통해 성장과정을 봐볼까요?'
            : '프로필을 설정하고 캘린더를 통해 성장과정을 살펴보세요 !'}
        </h1>

        {/* 캘린더 */}
        <div className="flex justify-center px-10 transform scale-90">
          <div className="bg-[#FFFFFFA3] border rounded-[35px] py-4 px-10 mt-4">
            <CalendarHeader />
            <CalendarBody />
          </div>
        </div>

        <div className="flex justify-center mb-4 mt-[-24px]">
          <h1 className="text-[26px] font-bold">21일의 기록</h1>
        </div>

        {/* 일기 한 줄 요약 */}
        <div className="flex justify-center text-[26px] mb-32 px-14 mx-10">
          <div className="w-full h-[220px] border rounded-[36px] bg-white px-12 py-4 relative">
            <div className="absolute top-4 right-4">
              <Link
                to="/"
                className="text-base font-thin text-[#919191] p-3 mr-10"
              >
                자세히 보기
              </Link>
            </div>
            <h1 className="font-bold my-6">제목</h1>
            <p className="font-medium">일기 한 줄 요약</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
