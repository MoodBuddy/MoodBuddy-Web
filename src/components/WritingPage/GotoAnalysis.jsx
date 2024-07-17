import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getProfile } from '../../apis/user';
import AnalysisEmotion from './AnalysisEmotion';
import analysisEmotion from '@assets/analysisEmotion.svg';
import close from '../../../public/icon/close.svg';
import Button from '../common/button/Button';

const GotoAnalysis = ({
  gotoAnalysisEmotionModal,
  setGotoAnalysisEmotionModal,
}) => {
  const [AnalysisEmotionModal, setAnalysisEmotionModal] = useState(false);

  const isAnalysisEmotionModal = () => {
    setAnalysisEmotionModal(!AnalysisEmotionModal);
  };

  const formattedDate = format(new Date(), 'yy.MM.dd (E)', {
    locale: ko,
  });
  const { isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
  const nickname = data.nickname;

  const handleClose = () => {
    setGotoAnalysisEmotionModal(!gotoAnalysisEmotionModal);
  };

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
      {gotoAnalysisEmotionModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex justify-end mr-[25px] mt-[15px] cursor-pointer">
              <img src={close} alt="close" onClick={handleClose} />
            </div>
            <div className="flex flex-col items-center gap-[20px]">
              <div className="font-medium text-[15px] mx-auto mt-[10px]">
                {formattedDate}
              </div>
              <div className="font-meetme font-bold text-[32.6px] mx-auto ">
                {`오늘의 ${nickname}${getPostPosition(nickname)} 어떤 감정일까요?`}
              </div>
              <img className=" w-[120px] h-[120px]" src={analysisEmotion} />
              <div>
                <Button
                  onClick={isAnalysisEmotionModal}
                  className="bg-[#D8B18E] font-medium text-[20px] w-[223px] h-[50px] rounded-[13px] mt-[20px] "
                >
                  감정분석하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnalysisEmotion AnalysisEmotionModal={AnalysisEmotionModal} />
    </>
  );
};
export default GotoAnalysis;
