import useCalendarStore from '../../../store/calendarStore';
import { format } from 'date-fns';
import happyQuddy from '@assets/happyQuddy.svg';

const CalendarBody = () => {
  const { currentDate, selectedDate, selectDate, daysInMonth } =
    useCalendarStore();
  const days = daysInMonth(currentDate);
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="p-6">
      <div className="h-[3.5px] w-full bg-black" />

      {/* weeks 출력 */}
      <div className="grid grid-cols-7">
        {weeks.map((week, index) => (
          <div
            key={week}
            className={`flex justify-center my-4 font-meetme text-[26px] ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-700'}`}
          >
            {week}
          </div>
        ))}
      </div>

      {/* days 출력 */}
      <div className="border-collapse table">
          {Array.from({ length: Math.ceil(days.length / 7) }).map(
            (_, rowIndex) => (
              <div className="table-row cursor-pointer" key={rowIndex}>
                {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((date) => (
                  <div
                    key={date.date}
                    className={`table-cell border-[3.5px] border-black p-2 w-[130px] h-[130px] ${format(currentDate, 'MM') !== date.month ? 'text-gray-400' : ''}
                    ${date.dayIndexOfWeek === 0 && format(currentDate, 'MM') === date.month ? 'text-red-500' : ''}
                    ${date.dayIndexOfWeek === 6 && format(currentDate, 'MM') === date.month ? 'text-blue-500' : 'text-black'}`}
                    onClick={() => selectDate(date.date)}
                  >
                    <div
                      className={`flex justify-center items-center w-[34px] h-[34px] ${selectedDate === date.date ? 'border-[4px] rounded-[4px] border-[#D8B18E] bg-[#D8B18E]' : ''}`}
                    >
                      <span className="font-meetme text-[26px] cursor-pointer">
                        {date.day}
                      </span>
                    </div>

                    {/* 선택된 날짜에만 쿼디 출력 (임의로 설정함) */}
                    {selectedDate === date.date ? (
                      <div className="flex justify-center">
                        <img
                          src={happyQuddy}
                          alt="happyQuddy"
                          className="w-[65%]"
                        />
                      </div>
                    ) : (
                      <div className="w-[65%]"></div>
                    )}
                  </div>
                ))}
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default CalendarBody;
