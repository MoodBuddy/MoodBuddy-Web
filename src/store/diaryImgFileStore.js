import create from 'zustand';

const useDiaryImgFileStore = create((set) => ({
  imageFiles: [], // 파일 배열로 상태를 초기화
  addImageFile: (file) =>
    set((state) => ({
      imageFiles: [...state.imageFiles, file], // 기존 배열에 파일을 추가
    })),
}));

export default useDiaryImgFileStore;
