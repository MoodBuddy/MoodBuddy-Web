import close from '../../../public/icon/close.svg';
const AnalysisEmotion = ({ AnalysisEmotionModal }) => {
  return (
    <>
      {AnalysisEmotionModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex flex-col">
              <div className="font-medium text-[15px] mx-auto mt-[66px]">
                24.04.21 (수){' '}
              </div>
              <div className="font-meetme text-[32.6px] mx-auto mt-[81px]">
                오늘의 나영이는 어떤 감정일까요?
              </div>
              <div className="mx-auto mt-[40px] border-2 border-black w-[456.75px] h-[26.4px] mb-5 h-2 rounded-full bg-gray-200">
                <div
                  className="relative top-[-1.5px] left-[-1px] border-2 border-black h-[26.4px] rounded-full bg-[#D8B18E]"
                  style={{ width: '50%' }}
                ></div>
              </div>
              <div className="font-medium text-[18px] mx-auto mt-[15.5px]">
                감정분석중입니다.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AnalysisEmotion;
