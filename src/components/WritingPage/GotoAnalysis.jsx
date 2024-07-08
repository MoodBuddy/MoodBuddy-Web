import { useState } from 'react';
import AnalysisEmotion from './AnalysisEmotion';
import analysisEmotion from '@assets/analysisEmotion.svg';
const GotoAnalysis = ({ gotoAnalysisEmotionModal }) => {
  const [AnalysisEmotionModal, setAnalysisEmotionModal] = useState(false);

  const isAnalysisEmotionModal = () => {
    setAnalysisEmotionModal(!AnalysisEmotionModal);
  };

  return (
    <>
      {gotoAnalysisEmotionModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex flex-col items-center gap-[20px]">
              <div className="font-medium text-[15px] mx-auto mt-[66px]">
                24.04.21 (수)
              </div>
              <div className="font-meetme font-bold text-[32.6px] mx-auto ">
                오늘의 나영이는 어떤 감정일까요?
              </div>
              <img className=" w-[120px] h-[120px]" src={analysisEmotion} />
              <div>
                <button
                  onClick={isAnalysisEmotionModal}
                  className="bg-[#D8B18E] font-medium text-[20px] w-[223px] h-[50px] rounded-[13px] mt-[20px] "
                >
                  감정분석하기
                </button>
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
