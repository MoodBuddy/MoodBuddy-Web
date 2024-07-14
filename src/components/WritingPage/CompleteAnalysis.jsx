import { useNavigate } from 'react-router-dom';
import { EmotionQuddyList } from '../../constants/EmotionQuddyList';
import { diaryDescription, saveDiary } from '../../apis/diary';
import useTitleStore from '../../store/titleStore';
import useDiaryContentStore from '../../store/diaryContentStore';
import useweatherStore from '../../store/weatherStore';
import useDiaryImgFileStore from '../../store/diaryImgFileStore';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import useDiaryItemIdStore from '../../store/diaryItemIdStore';

const CompleteAnalysis = ({ completeAnaylsis }) => {
  const { title } = useTitleStore();
  const { content } = useDiaryContentStore();
  const { selectedOption } = useweatherStore();
  const { imageFiles } = useDiaryImgFileStore();
  const [comment, setComment] = useState('');
  const [emotion, setEmotion] = useState('');
  const [date, setDate] = useState('');
  const { diaryItemId, setDiaryItemId } = useDiaryItemIdStore();
  const navigate = useNavigate();

  const items = EmotionQuddyList.find((it) => it.id === 1);

  useEffect(() => {
    if (completeAnaylsis) {
      const result = async () => {
        await isCompleteSave();
        await getDescription();
      };
      result();
    }
  }, [completeAnaylsis]);

  const getDescription = async () => {
    try {
      const res = await diaryDescription();

      console.log(res);
      setComment(res.data.comment);

      setEmotion(res.data.emotion);

      setDate(res.data.diaryDate);

      return res;
    } catch (error) {
      console.error('일기 description 오류 : ', error);
    }
  };

  const isCompleteSave = async () => {
    try {
      const formData = new FormData();

      formData.append('diaryTitle', title);
      formData.append('diaryDate', new Date().toISOString().slice(0, -5));
      formData.append('diaryContent', content);
      formData.append('diaryWeather', selectedOption);

      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('diaryImgList', imageFiles[i]);
      }

      console.log(...formData);
      const res = await saveDiary(formData);
      console.log(res.data);
      const diaryId = res.data.data.diaryId;
      console.log(diaryId);
      setDiaryItemId(diaryId);
    } catch (error) {
      console.error('일기 저장 오류', error);
    }
  };

  const isSave = () => {
    navigate(`/diary/${diaryItemId}`);
  };

  return (
    <>
      {completeAnaylsis && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[660px] h-[427.5px] bg-[#F7F3EF] rounded-[40px] border-[3px] border-black">
            <div className="flex flex-col items-center gap-[5px] ">
              <div className="font-meetme font-bold text-[32.6px] mx-auto mt-[40px] "></div>
              {comment}
              <div className="text-[18px] font-medium">{date}</div>
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
                onClick={isSave}
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
