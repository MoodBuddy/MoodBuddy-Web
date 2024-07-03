import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import EditBar from './EditBar';
import happyQuddy from '@assets/happyQuddy.svg';
import happyBubble from '../../../public/image/happyBubble.svg';
import { useState } from 'react';
import SimilarModal from './SimilarModal';

const DiarySection = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = format(new Date(data.date), 'yyyy년 MM월 dd일 EEEE', {
    locale: ko,
  });

  if (!data) {
    return <div>일기를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <EditBar />

      <div className="bg-[#F7F3EF] w-[1080px] h-full rounded-[36px] px-16 py-12 mb-16 ">
        <div className="flex justify-between relative">
          <div>
            <h1 className="font-meetme text-5xl font-bold mb-4 w-[550px] whitespace-normal break-words">
              {data.title}
            </h1>

            <div className="flex items-center gap-6 mb-20">
              <p className="text-lg">{formattedDate}</p>
              <p className="text-lg">날씨 - {data.weather}</p>
            </div>
          </div>

          <div className="mr-40 mb-6">
            <img
              src={happyQuddy}
              alt="happyQuddy"
              className="w-[150px] h-[170px]"
            />
            <p className="text-center text-lg">행복 Quddy</p>
          </div>

          {/* 비슷한 추억보기 모달 */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="absolute top-[25%] right-[-220px] cursor-pointer"
          >
            <img src={happyBubble} alt="happyBubble" className="w-[90%]" />
          </div>
        </div>

        <div className="h-[1px] my-3 w-full bg-stone-300" />

        <p className="text-lg my-10">{data.content}</p>

        {data.image ? (
          <img
            src={data.image}
            alt="Diary Image"
            className="w-full h-auto object-cover"
          />
        ) : (
          <></>
        )}
      </div>

      {isModalOpen && <SimilarModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DiarySection;
