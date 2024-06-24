import img from '@assets/img.svg';
import analysisEmotion from '@assets/analysisEmotion.svg';
import temporaryStorage from '@assets/temporaryStorage.svg';
import showTemplate from '@assets/showTemplate.svg';

const TopBar = () => {
  return (
    <>
      <div className="bg-[#EEE4DB] w-[full] h-[156px] shadow-md flex justify-center font-inter font-normal text-[15px]">
        <div className="flex flex-row justify-between items-center w-[1920px] transform scale-75  ">
          <button className="bg-[#F4EEE8] border-[#98928C] border w-[103px] h-[116px] rounded-[14px] ml-[103px] flex flex-col justify-center items-center gap-[13.5px] ">
            <img src={img}></img>
            <p>사진</p>
          </button>
          <div className="flex flex-row gap-[20px] mr-[30px]">
            <button className="bg-[#F4EEE8] border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-row items-center justify-center">
              <div className="flex flex-col items-center gap-[13.5px] ">
                <img src={temporaryStorage} className="w-[35px] h-[35px]"></img>
                <p>임시저장</p>
              </div>
              <div className="border-l-[1.5px] border-[#b3b3b3] rounded-md  h-16 mx-4"></div>
              <div className="font-inter font-medium text-[25px]">2</div>
            </button>
            <button className="bg-[#F4EEE8] border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col justify-center items-center gap-[13.5px]">
              <img src={analysisEmotion}></img>
              <p>감정분석하기</p>
            </button>
            <button className="bg-[#F4EEE8] border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col items-center justify-center gap-[13.5px]">
              <img src={showTemplate}></img>
              <p>템플릿보기</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
