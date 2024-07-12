import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data;
};

export const getUserInfo = async () => {
  try {
    const data = await get('/api/v1/member/main');
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getEmotionStatic = async (date) => {
  try {
    const data = await get(`/api/v1/member/main/emotion-static?month=${date}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

export const getDiaryNums = async (year) => {
  try {
    const data = await get(`/api/v1/member/main/diary-nums?year=${year}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
