import create from 'zustand';
const useweatherStore = create((set) => ({
  selectedOption: null,
  setSelectedOption: (newOption) => set({ selectedOption: newOption }),
}));

export default useweatherStore;
