import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { quddies } from '../constants/QuddyList';

// 날씨에 따라 텍스트 반환
export const formatWeather = (weather) => {
  switch (weather) {
    case 'CLEAR':
      return '맑음';
    case 'CLOUDY':
      return '구름많음';
    case 'RAIN':
      return '비';
    case 'SNOW':
      return '눈';
    default:
      return '알 수 없음';
  }
};

// 감정에 따라 적절한 쿼디 이미지와 텍스트 반환
export const formatQuddyByEmotion = (emotion) => {
  const quddy = quddies.find((q) => q.emotion === emotion);
  return quddy ? quddy : { imgSrc: null, text: '' };
};

// 날짜 포맷 ex) 2024.07.09(화)
export const formatDate = (date) => {
  const targetDate = date ? new Date(date) : new Date();
  return format(targetDate, 'yyyy. MM. dd (E)', {
    locale: ko,
  });
};
