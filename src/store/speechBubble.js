import create from 'zustand';

const useSpeechBubble = create((set) => ({
  speechBubble: false,
  setSpeechBubble: (show) => set({ speechBubble: show }),
}));

export default useSpeechBubble;
