import { useNavigate } from 'react-router-dom';
import { EmotionQuddyList } from '../../constants/EmotionQuddyList';
import AnalysisEmotion from './AnalysisEmotion';
import happyQuddy from '@assets/happyQuddy.svg';
const CompleteAnalysis = ({ completeAnaylsis }) => {
  const navigate = useNavigate();

  const items = EmotionQuddyList.find((it) => it.id === 1);

  const isCompleteSave = () => {
    navigate(`/diary/:1`);
  };
  return (
    <>
      {completeAnaylsis && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex flex-col items-center gap-[5px] ">
              <div className="font-meetme font-bold text-[32.6px] mx-auto mt-[40px] ">
                오늘 행복한 하루를 보냈네요!
              </div>
              <div className="text-[18px] font-medium">24.04.21 (수)</div>
              <div className="flex flex-col gap-[5px] justify-center items-center ">
                <img
                  className="transform scale-75 w-[182px] h-[193px]"
                  src={items.imgSrc}
                />
                <div
                  className="text-[25px] font-meetme relative top-[-20px]"
                  style={{ color: items.color }}
                >
                  {items.name}
                </div>
              </div>

              <button
                onClick={isCompleteSave}
                className="ml-auto mr-[25px] relative top-[-10px] bg-[#D8B18E] font-medium text-[20px] w-[120px] h-[40px] rounded-[13px] "
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CompleteAnalysis;
