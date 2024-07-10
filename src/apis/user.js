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
