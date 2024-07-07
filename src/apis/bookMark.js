import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data.data;
};

export const getBookMarkFindAll = async () => {
  try {
    const data = await get('/api/v1/member/bookMark/findAll');
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
