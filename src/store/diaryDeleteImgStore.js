import { create } from 'zustand';

const useDiaryDeleteImgStore = create((set) => ({
  diaryDeleteImg: [],
  setDiaryDeleteImg: (newDiaryDeleteImg) => {
    set((state) => {
      const updatedDeleteDiaryImg = [
        ...state.diaryDeleteImg,
        newDiaryDeleteImg,
      ];
      console.log('update Delete Diary Images:', updatedDeleteDiaryImg);
      return { diaryDeleteImg: updatedDeleteDiaryImg };
    });
  },
}));

export default useDiaryDeleteImgStore;
