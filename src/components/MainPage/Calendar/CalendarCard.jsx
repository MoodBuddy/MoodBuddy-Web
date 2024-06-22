import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { Link } from 'react-router-dom';
import helloQuddy from '@assets/helloQuddy.svg';

const CalendarCard = () => {
  return (
    <div className="relative flex justify-end mt-10 mb-36">
      {/* 좌측 쿼디 이미지 */}
      <div className="hidden xl:block absolute left-0 top-[40%] transform -translate-y-1/2 z-0">
        <img src={helloQuddy} alt="helloQuddy" className="w-auto h-auto" />
      </div>

      <div className="relative bg-[#EEEDE6] p-8 rounded-l-[66px] shadow-lg z-10">
        <h1 className="font-meetme text-[57px] flex justify-center my-6">
          성나영 님의 캘린더를 통해 성장과정을 봐볼까요?
        </h1>

        {/* 캘린더 */}
        <div className="flex justify-center px-10">
          <div className="bg-[#FFFFFFA3] border rounded-[35px] py-4 px-24 mt-16">
            <CalendarHeader />
            <CalendarBody />
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-4">
          <h1 className="text-[29px] font-bold">21일의 기록</h1>
        </div>

        {/* 일기 한 줄 요약 */}
        <div className="flex justify-center text-[29px] mb-40 px-8">
          <div className="w-full h-[248px] border rounded-[36px] bg-white px-12 py-4 relative">
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
