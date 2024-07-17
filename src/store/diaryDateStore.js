import { create } from 'zustand';

const useDiaryDateStore = create((set) => ({
  diaryDate: '',
  setDiaryDate: (newDate) => set({ diaryDate: newDate }),
}));

export default useDiaryDateStore;
