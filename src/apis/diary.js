import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data.data;
};

export const getFindOne = async (diaryId) => {
  try {
    const data = await get(`/api/v1/member/diary/findOne/${diaryId}`);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};

// Pageable Object 수정해야함
export const getFindAll = async () => {
  try {
    const data = await get(
      `/api/v1/member/diary/findAllPageable?page=0&size=20`,
    );
    return data;
  } catch (error) {
    console.error('데이터 불러오기에 실패하였습니다.', error);
  }
};

export const getFindAllByEmotion = async ({ emotion }) => {
  try {
    const url = `/api/v1/member/diary/findAllByEmotionWithPageable?diaryEmotion=${emotion}&page=0&size=20&sort=string`;
    const data = await get(url);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
};
