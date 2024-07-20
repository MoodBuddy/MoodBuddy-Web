import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getProfile } from '../../apis/user';
import CompleteAnalysis from './CompleteAnalysis';

const AnalysisEmotion = ({ AnalysisEmotionModal }) => {
  const [progress, setProgress] = useState(0);
  const [completeAnaylsis, setCompleteAnaylsis] = useState(false);

  const formattedDate = format(new Date(), 'yy.MM.dd (E)', {
    locale: ko,
  });
  const { isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
  const nickname = data.nickname;

  useEffect(() => {
    let interval;
    if (AnalysisEmotionModal) {
      setProgress(0); // 모달창이 열릴 때 0으로 리셋
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50); // 5초 동안 100% => 50ms 동안 1%
    }
    return () => clearInterval(interval);
  }, [AnalysisEmotionModal]);

  useEffect(() => {
    if (progress === 100) {
      setCompleteAnaylsis(!completeAnaylsis);
    }
  }, [progress]);

  const hasFinalConsonant = (char) => {
    const charCode = char.charCodeAt(0); //이름 끝자의 유니코드 값
    const diff = charCode - 0xac00; //유니코드 값에서 한글 음절의 시작점인 0XAC00을 뺌
    const jong = diff % 28; //남은 값을 28로 나눠서 나머지 구함
    return jong !== 0; //나머지가 0이 아니면 받침 존재
  };
  const getPostPosition = (nickname) => {
    if (!nickname) return '은'; //닉네임이 없으면 기본 조사 '은'
    const lastChar = nickname[nickname.length - 1];
    return hasFinalConsonant(lastChar) ? '은' : '는';
  };

  return (
    <>
      {AnalysisEmotionModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex flex-col">
              <div className="font-medium text-[15px] mx-auto mt-[66px]">
                {formattedDate}
              </div>
              <div className="font-meetme text-[32.6px] mx-auto mt-[81px]">
                {`오늘의 ${nickname}${getPostPosition(nickname)} 어떤 감정일까요?`}
              </div>
              <div className="mx-auto mt-[40px] border-2 border-black w-[456.75px] h-[26.4px] mb-5 h-2 rounded-full bg-gray-200">
                <div
                  className="relative top-[-1.5px] left-[-1px] border-2 border-black h-[26.4px] rounded-full bg-[#D8B18E]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="font-medium text-[18px] mx-auto mt-[15.5px]">
                감정분석중입니다.
              </div>
            </div>
          </div>
        </div>
      )}
      <CompleteAnalysis completeAnaylsis={completeAnaylsis} />
    </>
  );
};
export default AnalysisEmotion;
