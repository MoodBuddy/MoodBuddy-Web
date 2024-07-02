import { format, startOfWeek, addDays, isBefore, isSameDay } from 'date-fns';
import happyQuddy from '@assets/happyQuddy.svg';

const MyCalendarSection = ({ currentDate, daysInMonth }) => {
  const days = daysInMonth(currentDate);
  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
  const today = new Date();

  const weeks = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startDate, index), 'eee'),
  );

  return (
    <div className="p-6 mt-10 mb-24 h-full rounded-[28px] border border-black">
      {/* month 출력 */}
      <div className="flex justify-center mb-6">
        <h1 className="text-xl font-semibold">
          {format(currentDate, 'M')}월 감정 캘린더
        </h1>
      </div>

      {/* weeks 출력 */}
      <div className="grid grid-cols-7 mb-10">
        {weeks.map((week, index) => (
          <div
            key={week}
            className="flex justify-center my-2 text-xl text-[#C79A76]"
          >
            {week}
          </div>
        ))}
      </div>

      {/* days 출력 */}
      {Array.from({ length: Math.ceil(days.length / 7) }).map((_, rowIndex) => (
        <div className="table-row cursor-pointer" key={rowIndex}>
          {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((date) => (
            <div key={date.date} className="table-cell">
              <div className="flex justify-center items-center w-[34px] h-[34px] mx-5 my-1">
                <span className="text-xl cursor-pointer">{date.day}</span>
              </div>

              {/* 오늘 날짜를 기준으로 과거 날짜에만 쿼디 출력 */}
              {isBefore(new Date(date.date), today) ||
              isSameDay(new Date(date.date), today) ? (
                <div className="flex justify-center">
                  <img src={happyQuddy} alt="happyQuddy" className="w-[50px] mb-3" />
                </div>
              ) : (
                <div className="w-[50px] mb-16"></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyCalendarSection;
