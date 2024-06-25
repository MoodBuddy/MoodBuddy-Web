import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import EditBar from './EditBar';

const DiarySection = ({ data }) => {
  const formattedDate = format(new Date(data.date), 'yyyy년 MM월 dd일 EEEE', {
    locale: ko,
  });

  if (!data) {
    return <div>일기를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
        <EditBar />

        <div className="bg-[#F7F3EF] w-[1080px] h-full rounded-[36px] p-16 mb-16">
          <h1 className="font-meetme text-5xl font-bold mb-4">{data.title}</h1>

          <div className="flex items-center gap-6 mb-20">
            <p className="text-lg">{formattedDate}</p>
            <p className="text-lg">날씨 - {data.weather}</p>
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
      </div>

  );
};

export default DiarySection;
