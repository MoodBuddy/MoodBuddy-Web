import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { Link } from 'react-router-dom';

const CalendarCard = () => {
  return (
    <div className="flex justify-end mt-10 mb-36">
      <div className="bg-[#EEEDE6] w-[1500px] p-8 rounded-l-[66px] shadow-lg">
        <h1 className="font-meetme text-[57px] flex justify-center my-6">
          성나영 님의 캘린더를 통해 성장과정을 봐볼까요?
        </h1>

        {/* 캘린더 */}
        <div className="flex justify-center">
          <div className="bg-[#FFFFFFA3] w-[1180px] border rounded-[35px] py-4 px-24 mt-16">
            <CalendarHeader />
            <CalendarBody />
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-4">
          <h1 className="text-[29px] font-bold">21일의 기록</h1>
        </div>

        {/* 일기 한 줄 요약 */}
        <div className="flex justify-center text-[29px] mb-40">
          <div className="w-[1180px] h-[248px] border rounded-[36px] bg-white px-12 py-4 relative">
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
