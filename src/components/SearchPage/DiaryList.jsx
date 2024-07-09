import { Link } from 'react-router-dom';
import { getFindAll, getFindAllByEmotion } from '../../apis/diary';
import { useQuery } from '@tanstack/react-query';
import { getBookMarkFindAll } from '../../apis/bookMark';

import { weatherList } from '../../constants/WeatherList';

const DiaryList = ({ filterType, emotion }) => {
  // 필터 타입에 따라 다른 API 함수 선택
  const getDiariesQuery = () => {
    switch (filterType) {
      case 'emotion':
        return getFindAllByEmotion({ emotion });
      case 'bookMark':
        return getBookMarkFindAll();
      default:
        return getFindAll();
    }
  };

  const { isError, data, error } = useQuery({
    queryKey: ['diaries', filterType, emotion],
    queryFn: getDiariesQuery,
  });

  if (isError) {
    return <div>오류 발생: {error.message}</div>;
  }

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div className="bg-[#F7F3EF] w-[1080px] h-screen rounded-[36px] p-6 my-10">
      <div className="h-full overflow-y-scroll custom-scrollbar">
        {data.content.map((item) => (
          <div key={item.diaryId}>
            <Link
              to={`/diary/${item.diaryId}`}
              className="flex p-4 items-center justify-between"
            >
              <div className="flex flex-col space-y-3">
                <p className="text-zinc-400 text-xl">
                  {new Date(item.diaryDate).toLocaleDateString()}
                </p>
                <h1 className="font-meetme text-3xl font-bold mb-2">
                  {item.diaryTitle}
                </h1>
                <p className="text-zinc-400 text-lg text-ellipsis w-[700px] truncate">
                  {item.diarySummary}
                </p>
              </div>

              {item.diaryImgList.length > 0 ? (
                <div className="rounded-full border overflow-hidden">
                  <img
                    src={item.diaryImgList[0]}
                    alt="Diary Image"
                    className="w-[106px] h-[106px] object-cover"
                  />
                </div>
              ) : (
                <div className="rounded-full border border-[#B98D6C] p-5">
                  <img
                    src={weatherList[item.diaryWeather]}
                    alt={weatherList[item.diaryWeather]}
                    className="w-16 h-16"
                  />
                </div>
              )}
            </Link>
            <div className="h-[1px] my-3 w-full bg-stone-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
