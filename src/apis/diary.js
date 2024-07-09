import client from './client';

const get = async (url) => {
  const res = await client.get(url);
  return res.data.data;
};

export const saveDiary = async (diaryData) => {
  try {
    const formData = new FormData();

    formData.append('diaryTitle', diaryData.diaryTitle);
    formData.append('diaryDate', diaryData.diaryDate.slice(0, -5));
    formData.append('diaryContent', diaryData.diaryContent);
    formData.append('diaryWeather', diaryData.diaryWeather);

    if (diaryData.diaryImgList) {
      diaryData.diaryImgList.forEach((file, index) => {
        formData.append(`diaryImgList[${index}]`, file);
      });
    }
    const response = await client.post('/api/v1/member/diary/save', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('일기 저장 오류:', error);
    throw new Error('데이터 불러오기에 실패하였습니다.');
  }
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
    throw new Error('데이터 불러오기에 실패하였습니다.');
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
