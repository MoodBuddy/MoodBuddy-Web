import create from 'zustand';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';

const useCalendarStore = create((set) => ({
  currentDate: new Date(),
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
  setDate: (newDate) => set({ currentDate: newDate }),
  selectDate: (date) => set({ selectedDate: date }),

  handlePrevMonth: () =>
    set((state) => ({ currentDate: subMonths(state.currentDate, 1) })),
  handleNextMonth: () =>
    set((state) => ({ currentDate: addMonths(state.currentDate, 1) })),

  daysInMonth: (currentDate) => {
    const startCurrentMonth = startOfMonth(currentDate);
    const endCurrentMonth = endOfMonth(currentDate);
    const startOfFirstWeek = startOfWeek(startCurrentMonth, {
      weekStartsOn: 0,
    });
    const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

    const days = eachDayOfInterval({
      start: startOfFirstWeek,
      end: endOfLastWeek,
    });

    return days.map((day) => ({
      date: format(day, 'yyyy-MM-dd'),
      month: format(day, 'MM'),
      day: format(day, 'dd'),
      dayIndexOfWeek: getDay(day),
    }));
  },
}));

export default useCalendarStore;
