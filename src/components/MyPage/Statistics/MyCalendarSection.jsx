import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import useCalendarStore from '../../../store/calendarStore';
import {
  getDiaryEmotion,
  getEmotionImage,
  getDiaryId,
} from '../../../utils/calendar';
import { Link } from 'react-router-dom';

const MyCalendarSection = ({ currentDate, daysInMonth }) => {
  const { diaryList } = useCalendarStore();
  const days = daysInMonth(currentDate);
  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 });

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
                <Link to={`/diary/${getDiaryId(diaryList, date.date)}`}>
                  <span className="text-xl cursor-pointer">{date.day}</span>
                </Link>
              </div>

              {/* 감정에 맞는 쿼디 출력, 없을 경우 빈칸 표시 */}
              <div className="flex justify-center">
                {getDiaryEmotion(diaryList, date.date) ? (
                  <Link to={`/diary/${getDiaryId(diaryList, date.date)}`}>
                    <img
                      src={getEmotionImage(
                        getDiaryEmotion(diaryList, date.date),
                      )}
                      alt={getDiaryEmotion(diaryList, date.date)}
                      className="w-[50px] mb-3"
                    />
                  </Link>
                ) : (
                  <div className="w-[50px] mb-16"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyCalendarSection;
