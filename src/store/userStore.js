// useUserStore.js (Zustand 스토어)
import create from 'zustand';

const useUserStore = create((set) => ({
  profileNickName: null,
  userBirth: null,
  profileComment: null,
  profileImgURL: null,
  userCurDiaryNums: 0,
  diaryEmotion: null,
  maxEmotionNum: 0,

  setUserInfo: (userInfo) =>
    set((state) => ({
      profileNickName: userInfo.profileNickName,
      userBirth: userInfo.userBirth,
      profileComment: userInfo.profileComment,
      profileImgURL: userInfo.profileImgURL,
      userCurDiaryNums: userInfo.userCurDiaryNums,
      diaryEmotion: userInfo.diaryEmotion,
      maxEmotionNum: userInfo.maxEmotionNum,
    })),
}));

export default useUserStore;
