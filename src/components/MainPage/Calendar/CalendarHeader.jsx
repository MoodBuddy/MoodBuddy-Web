import { format } from 'date-fns';
import useCalendarStore from '../../../store/calendarStore';
import nextIcon from '../../../../public/icon/nextIcon.svg';
import prevIcon from '../../../../public/icon/prevIcon.svg';

const CalendarHeader = () => {
  const { currentDate, handlePrevMonth, handleNextMonth } = useCalendarStore();

  const month = format(currentDate, 'MMM');

  return (
    <div className="">
      <div className="flex items-center gap-4 text-lg">
        <button onClick={handlePrevMonth}>
          <img src={prevIcon} alt="prevIcon" />
        </button>

        <h1 className="font-meetme text-[106px] mx-4 my-12">{month}</h1>

        <button onClick={handleNextMonth}>
          <img src={nextIcon} alt="nextIcon" />
        </button>
      </div>

    </div>
  );
};

export default CalendarHeader;
