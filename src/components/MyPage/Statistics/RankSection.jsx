import { format } from 'date-fns';
import { quddies } from '../../../constants/QuddyList';

const RankSection = ({ currentDate, emotionData }) => {
  // 감정 데이터를 순위로 정렬
  console.log(emotionData);
  const sortedEmotions = emotionData
    ? emotionData.slice().sort((a, b) => b.nums - a.nums)
    : [];

  return (
    <div className="w-[400px] ml-16 mt-10 mb-8">
      <h1 className="text-xl font-semibold items-center mb-10">
        {format(currentDate, 'M')}월 감정 리스트 순위
      </h1>
      <div className="flex gap-12">
        <div className="flex flex-col items-start">
          {sortedEmotions.length > 0 &&
            sortedEmotions.map((emotion, index) =>
              index === 0 ? (
                <div key={index} className="flex flex-col items-center gap-2">
                  <img
                    src={
                      quddies.find(
                        (quddy) => quddy.emotion === emotion.diaryEmotion,
                      ).imgSrc
                    }
                    alt={emotion.diaryEmotion}
                    className="w-[120px] h-[140px]"
                  />
                  <span className="text-3xl bg-[#C79A76] rounded-[64px] px-5">
                    {index + 1}위
                  </span>
                  <span className="text-2xl font-thin">{emotion.nums}회</span>
                </div>
              ) : null,
            )}
        </div>
        <div className="flex flex-col items-end mt-12">
          {sortedEmotions.length > 0 &&
            sortedEmotions.map((emotion, index) =>
              index !== 0 ? (
                <div key={index} className="flex flex-col">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-end mt-4">
                      <span className="text-lg text-neutral-500">
                        {index + 1}위
                      </span>
                      <span className="text-sm text-neutral-500">
                        {emotion.nums}회
                      </span>
                    </div>
                    <img
                      src={
                        quddies.find(
                          (quddy) => quddy.emotion === emotion.diaryEmotion,
                        ).imgSrc
                      }
                      alt={emotion.diaryEmotion}
                      className="mb-4 w-[75px] h-[85px]"
                    />
                  </div>
                </div>
              ) : null,
            )}
        </div>
      </div>
    </div>
  );
};

export default RankSection;
