import { useState, useEffect } from 'react';
import back from '../../../public/icon/back.svg';
import { useNavigate } from 'react-router-dom';
import { addHours } from 'date-fns';
import Timer from './timer';
import useShowAnswerStore from '../../store/showAnswerStore';

const QuddyLetterContent = ({ data }) => {
  const navigate = useNavigate();
  const { showAnswer, setShowAnswer } = useShowAnswerStore((state) => ({
    showAnswer: state.showAnswer,
    setShowAnswer: state.setShowAnswer,
  }));
  const [timeToDisplayAnswer, setTimeToDisplayAnswer] = useState(null);

  useEffect(() => {
    if (data && data.letterDate) {
      const letterDate = new Date(data.letterDate);
      // 12시간 뒤에 보여지게 설정
      const displayTime = addHours(letterDate, 12);
      setTimeToDisplayAnswer(displayTime);
    }
  }, [data]);

  useEffect(() => {
    const currentTime = new Date();
    if (timeToDisplayAnswer && currentTime >= timeToDisplayAnswer) {
      setShowAnswer(true);
    }
  }, [timeToDisplayAnswer]);

  const handleBack = () => {
    navigate('/counseling');
  };

  if (!data) {
    return <div>편지를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="transform scale-75 relative top-[-220px]">
        <div className="box-content border-[1px] border-black w-[1600px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-200px] pb-[20px]">
          <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-start gap-[616px] items-center">
            <img src={back} onClick={handleBack} className="cursor-pointer" />
            <div className="font-medium text-[35px] ml-12">To.QUDDY</div>
          </div>

          <div className="text-center my-[150px] mx-auto font-light text-[30px] leading-[66px] bg-[#F7F3EF] outline-none w-[1300px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
            {data.letterWorryContent}
          </div>

          <div className="flex items-center justify-center h-[86px] border-y-[1px] border-black font-medium text-[35px]">
            From. QUDDY
          </div>

          <div className="flex flex-col justify-center items-center  mt-[159px] gap-[70px]">
            {showAnswer ? (
              <div className="text-center my-[150px] mx-auto font-light text-[30px] leading-[66px] bg-[#F7F3EF] outline-none w-[1300px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
                {data.letterAnswerContent}
              </div>
            ) : (
              <>
                <div className="font-light text-[46px] text-[#7c7c7c]">
                  답장이 오는 중입니다! 조금만 기다려주세요 :)
                </div>
                <Timer displayTime={timeToDisplayAnswer} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuddyLetterContent;
