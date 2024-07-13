import { useNavigate } from 'react-router-dom';
import { EmotionQuddyList } from '../../constants/EmotionQuddyList';
import { useState } from 'react';
import { saveDiary } from '../../apis/diary';
import useTitleStore from '../../store/titleStore';
import useDiaryContentStore from '../../store/diaryContentStore';
import useweatherStore from '../../store/weatherStore';
import useDiaryImgStore from '../../store/diaryImgStore';

const convertBase64ToFile = (base64, fileName) => {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

const CompleteAnalysis = ({ completeAnaylsis }) => {
  const [diaryId, setDiaryId] = useState(null);
  const { title } = useTitleStore();
  const { content } = useDiaryContentStore();
  const { selectedOption } = useweatherStore();
  const { diaryImg, setDiaryImg } = useDiaryImgStore();

  const navigate = useNavigate();

  const items = EmotionQuddyList.find((it) => it.id === 1);

  const isCompleteSave = async () => {
    try {
      const formData = new FormData();
      formData.append('diaryTitle', title);
      formData.append('diaryDate', new Date().toISOString());
      formData.append('diaryContent', content);
      formData.append('diaryWeather', selectedOption);

      diaryImg.forEach((img, index) => {
        formData.append('diaryImgList', img);
      });

      console.log(formData);
      const res = await saveDiary(formData);
      console.log(res);
    } catch (error) {
      console.error('일기 저장 오류', error);
    }
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
