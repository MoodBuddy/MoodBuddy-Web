import { useState, useEffect, useRef } from 'react';
import Weather from './Weather';
import Template from './Template';
import useTitleStore from '../../store/titleStore';
import useDiaryImgStore from '../../store/diaryImgStore';
import close from '../../../public/icon/blackClose.svg';
import useDiaryImgFileStore from '../../store/diaryImgFileStore';
import useDiaryContentStore from '../../store/diaryContentStore';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const Diary = ({ templateOn, setTemplateOn }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const { title, setTitle } = useTitleStore();
  const { content, setContent } = useDiaryContentStore();
  const { diaryImg, setDiaryImg } = useDiaryImgStore();

  const { removeImageFile } = useDiaryImgFileStore();

  const formattedDate = format(new Date(), 'yyyy년 MM월 dd일 EEEE', {
    locale: ko,
  });

  const handleTemplate = () => {
    setTemplateOn(!templateOn);
  };
  useEffect(() => {
    setTitle('');
    setContent('');
    setDiaryImg([]);
    console.log(diaryImg);
  }, []);

  useEffect(() => {
    if (selectedTemplate) {
      setContent((prevContent) =>
        prevContent ? `${prevContent}\n${selectedTemplate}` : selectedTemplate,
      );
    }
  }, [selectedTemplate]);

  const handleImageRemove = (indexToRemove) => {
    const newDiaryImg = diaryImg.filter((_, index) => index !== indexToRemove);
    setDiaryImg(newDiaryImg);
    removeImageFile(indexToRemove);
  };

  return (
    <>
      <div className="flex relative top-[-203.5px] transform scale-75 mb-[-415px]">
        <div className="z-10 w-[1174px] h-[1534px] bg-[#F7F3EF] mb-[80px] rounded-b-[36px]">
          <div className="flex flex-row justify-between items-center ml-[121px] mr-[45px] mt-[149px]">
            <div className="flex flex-col gap-[41px]">
              <div className="text-[25px]">{formattedDate}</div>
              <input
                type="text"
                className="font-meetme text-[75px] bg-[#F7F3EF] outline-none"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-row gap-[16px]">
              <div className="text-[24px]">날씨</div>
              <div>
                <Weather></Weather>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-[#BABABA]/400 mt-[52px] "></div>
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-row w-[900px] overflow-x-auto custom-scrollbar">
              {diaryImg.map((imageUrl, index) => (
                <div key={index} className="relative mr-[30px] flex-shrink-0">
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Diary Image ${index}`}
                    className="w-[300px] h-[300px]"
                  />
                  <button
                    className="absolute top-0 right-[-25px] rounded-[10px] px-1 py-1 flex justify-center items-center"
                    onClick={() => handleImageRemove(index)}
                  >
                    <img src={close} />
                  </button>
                </div>
              ))}
            </div>
            <textarea
              type="text"
              className={`my-[70px] font-light text-[20px] leading-[66px] bg-[#F7F3EF] outline-none w-[949px] ${diaryImg.length ? 'h-[500px]' : 'h-[931px]'}  overflow-y-auto custom-scrollbar `}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder={`오늘의 하루를 정리하기 위해 온 당신! 
오늘 하루도 수고 많았어요.
오늘 하루도 행복하게 마무리 해볼까요? 
오늘 어떤 일이 있었는지, 기록하고 싶은 이야기는 무엇인지 솔직하게 적어보세요. 
일기 작성이 어렵다면, 질문 템플릿을 이용해 다양한 생각을 적어볼 수 있어요. 
일기 작성 후 감정분석하기를 누르면, 감정에 맞는 쿼디가 나타나요!`}
            />
          </div>
        </div>
        <Template
          templateOn={templateOn}
          setTemplateOn={handleTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </div>
    </>
  );
};
export default Diary;
