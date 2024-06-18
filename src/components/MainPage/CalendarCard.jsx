import Calendar from './Calendar';

const CalendarCard = () => {
  return (
    <div className="flex justify-end mt-10 mb-36">
      <div className="bg-[#EEEDE6] w-[1500px] p-8 rounded-l-[66px] shadow-lg">
        <h1 className="font-meetme text-[57px] flex justify-center">
          성나영 님의 캘린더를 통해 성장과정을 봐볼까요?
        </h1>

        {/* 캘린더 */}
        <div className="flex justify-center">
          <Calendar />
        </div>

        <div className="flex justify-center mt-4 mb-2">
          <h1 className="text-[29px] font-bold">21일의 기록</h1>
        </div>

        <div className="flex justify-center text-[29px]">
          <div className="w-[1180px] h-[248px] border rounded-[36px] bg-white px-12 py-4">
            <h1 className="font-bold my-6">제목</h1>
            <p className="font-medium">일기 한 줄 요약</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CalendarCard;
