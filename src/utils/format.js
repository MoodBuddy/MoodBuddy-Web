import { quddies } from "../constants/QuddyList";

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

// 감정에 따라 적절한 쿼디 이미지와 텍스트 반환하는 함수
export const formatQuddyByEmotion = (emotion) => {
  const quddy = quddies.find((q) => q.emotion === emotion);
  return quddy ? quddy : { imgSrc: null, text: '' };
};