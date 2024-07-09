import create from 'zustand';

const useDiaryContentStore = create((set) => ({
  content: '',
  setContent: (newContent) => set({ content: newContent }),
}));

export default useDiaryContentStore;
