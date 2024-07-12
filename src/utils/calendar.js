import { format } from 'date-fns';
import { quddies } from '../constants/QuddyList';

// 일기 날짜로 감정을 찾는 함수
export const getDiaryEmotion = (diaryList, date) => {
  const diary = diaryList.find(
    (diary) => format(new Date(diary.diaryDate), 'yyyy-MM-dd') === date,
  );
  return diary ? diary.diaryEmotion : null;
};

// 감정에 맞는 쿼디 이미지를 찾는 함수
export const getEmotionImage = (emotion) => {
  const quddy = quddies.find((quddy) => quddy.emotion === emotion);
  return quddy ? quddy.imgSrc : null;
};
