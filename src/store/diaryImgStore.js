import create from 'zustand';

const useDiaryImgStore = create((set) => ({
  diaryImg: [],
  setDiaryImg: (newdiaryImg) => set({ diaryImg: newdiaryImg }),
}));

export default useDiaryImgStore;
