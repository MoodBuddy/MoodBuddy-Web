import { format } from 'date-fns';
import useCalendarStore from '../../../store/calendarStore';
import { getDiaryEmotion, getEmotionImage } from '../../../utils/calendar'; 

const CalendarBody = () => {
  const { currentDate, selectedDate, selectDate, daysInMonth, diaryList } =
    useCalendarStore();
  const days = daysInMonth(currentDate);
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="py-6 px-20">
      <div className="h-[3.5px] w-full bg-black" />

      {/* weeks 출력 */}
      <div className="grid grid-cols-7">
        {weeks.map((week, index) => (
          <div
            key={week}
            className={`flex justify-center my-4 font-meetme text-2xl ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-700'}`}
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
                  className={`table-cell border-[3.5px] border-black p-2 w-[122px] h-[122px] ${format(currentDate, 'MM') !== date.month ? 'text-gray-400' : ''}
                ${date.dayIndexOfWeek === 0 && format(currentDate, 'MM') === date.month ? 'text-red-500' : ''}
                ${date.dayIndexOfWeek === 6 && format(currentDate, 'MM') === date.month ? 'text-blue-500' : 'text-black'}`}
                  onClick={() => {
                    selectDate(date.date);
                  }}
                >
                  <div
                    className={`flex justify-center items-center w-[30px] h-[30px] ${selectedDate === date.date ? 'border-[4px] rounded-[4px] border-[#D8B18E] bg-[#D8B18E]' : ''}`}
                  >
                    <span className="font-meetme text-2xl cursor-pointer">
                      {date.day}
                    </span>
                  </div>

                  {/* 감정에 맞는 쿼디 출력 */}
                  {getDiaryEmotion(diaryList, date.date) ? (
                    <div className="flex justify-center relative">
                      <img
                        src={getEmotionImage(
                          getDiaryEmotion(diaryList, date.date),
                        )}
                        alt={getDiaryEmotion(diaryList, date.date)}
                        className="w-[75%] absolute top-[-18px] left-5"
                      />
                    </div>
                  ) : (
                    <div className="w-[75%]"></div>
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
