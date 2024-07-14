import { useState } from 'react';
import close from '../../../public/icon/close.svg';
import DailyQuestion from './DailyQuestion';
import EmotionQuestion from './EmotionQuestion';
import FutureQuestion from './FutureQuestion';

const Template = ({
  templateOn,
  setTemplateOn,
  setSelectedTemplate,
  selectedTemplate,
}) => {
  const [tab, setTab] = useState('left');
  return (
    <div
      className={`flex flex-col z-20 absolute top-0 right-0 h-[1600px] bg-[#E8DBCF] rounded-tl-[36px] shadow-2xl transition-transform transition-opacity duration-500 ${
        templateOn
          ? 'translate-x-[400px] opacity-100'
          : 'translate-x-[600px] opacity-0'
      }`}
      style={{ width: '400px', visibility: templateOn ? 'visible' : 'hidden' }}
    >
      <div className="flex justify-between w-[350px] mx-auto mt-[66px]">
        <div className="font-meetme text-[42px]">템플릿</div>
        <img className="cursor-pointer" src={close} onClick={setTemplateOn} />
      </div>
      <div className="text-[17px] opacity-60 ml-[28px]">
        쉽게 일기를 쓸 수 있도록 도와줄게요.
      </div>
      <div className="flex justify-center w-full mt-[100px]">
        <button
          className={`grow pb-[17px] ${tab == 'left' ? 'border-b-[2px] border-[#555555]' : 'border-none'} `}
          onClick={() => setTab('left')}
        >
          일상질문
        </button>
        <button
          className={`grow pb-[17px] ${tab == 'mid' ? 'border-b-[2px] border-[#555555]' : 'border-none'} `}
          onClick={() => setTab('mid')}
        >
          감정질문
        </button>
        <button
          className={`grow pb-[17px] ${tab == 'right' ? 'border-b-[2px] border-[#555555] ' : 'border-none'} `}
          onClick={() => setTab('right')}
        >
          미래질문
        </button>
      </div>
      <div className="border-b-[1px] border-[#BABABA]"></div>
      {tab == 'left' ? (
        <DailyQuestion
          setSelectedTemplate={setSelectedTemplate}
          selectedTemplate={selectedTemplate}
        />
      ) : tab == 'mid' ? (
        <EmotionQuestion setSelectedTemplate={setSelectedTemplate} />
      ) : (
        <FutureQuestion setSelectedTemplate={setSelectedTemplate} />
      )}
    </div>
  );
};
export default Template;
