import create from 'zustand';

const useDiaryImgFileStore = create((set) => ({
  imageFiles: [], // 파일 배열로 상태를 초기화
  addImageFile: (file) =>
    set((state) => ({
      imageFiles: [...state.imageFiles, file], // 기존 배열에 파일을 추가
    })),
  removeImageFile: (index) =>
    set((state) => ({
      imageFiles: state.imageFiles.filter((_, i) => i !== index), // 해당 인덱스의 파일을 제거
    })),
}));

export default useDiaryImgFileStore;
