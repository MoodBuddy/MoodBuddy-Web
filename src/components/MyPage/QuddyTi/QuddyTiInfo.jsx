import { getDaysInMonth } from 'date-fns';
import prevIcon from '../../../../public/icon/prevIcon.svg';
import { topics } from '../../../constants/TopicList';
import { emotions } from '../../../constants/EmotionList';
import TopicStats from './TopicStats';
import FrequencyStats from './FrequencyStats';
import { useNavigate } from 'react-router-dom';
import EmotionStats from './EmotionStats';
import TypeStats from './TypeStats';
import { getquddyTI } from '../../../apis/user';
import { useQuery } from '@tanstack/react-query';

const QuddyTiInfo = () => {
  const navigate = useNavigate();

  const currentDate = new Date();
  const daysInMonth = getDaysInMonth(currentDate);

  const { isError, data } = useQuery({
    queryKey: ['quddyTI'],
    queryFn: getquddyTI,
    throwOnError: true,
    onError: (error) => {
      console.error('Error fetching quddyTI data:', error);
    },
  });

  console.log(data);

  if (!data || isError) {
    return <div className="p-6">데이터가 없습니다.</div>;
  }

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-6">
        <img src={prevIcon} alt="prevIcon" />
      </button>
      <div className="flex flex-col items-center px-10">
        <h1 className="font-meetme text-4xl mb-6">
          나의 QuddyTI를 알아볼까요?
        </h1>

        <FrequencyStats
          daysInMonth={daysInMonth}
          dailyCount={data.dailyCount}
        />
        <TopicStats topicList={topics} data={data} daysInMonth={daysInMonth} />
        <EmotionStats emotions={emotions} data={data} />
        <TypeStats data={data} />
      </div>
    </div>
  );
};

export default QuddyTiInfo;
