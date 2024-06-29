import create from 'zustand';

const useContentStore = create((set) => ({
  content: '',
  setContent: (newContent) => set({ content: newContent }),
}));

export default useContentStore;
