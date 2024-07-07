import { EmotionQuddyList } from '../../../constants/EmotionQuddyList';

const ShowEmotions = () => {
  const firstRowItems = EmotionQuddyList.slice(0, 3);
  const secondRowItems = EmotionQuddyList.slice(3);
  return (
    <div className="w-[687px] h-[679px] bg-[#F7F3EF] rounded-[30px] border-[3px] border-black">
      <div className="font-semiBold text-[20px] text-[#868686] ml-[35px] mt-[26px]">
        현재까지 감정보기
      </div>
      <div className="flex flex-col gap-[15px] items-center mt-[52px]">
        <div className="flex justify-center items-center gap-[13px]">
          {firstRowItems.map((items) => (
            <div className="flex flex-col gap-[5px] justify-center items-center ">
              <img className="w-[134px] h-[142px]" src={items.imgSrc} />
              <div
                className="text-[25px] font-meetme"
                style={{ color: items.color }}
              >
                {items.name}
              </div>
              <div className="flex items-center gap-[5px]">
                <span className="text-[35px]">{items.value}</span>
                <span className="text-[23px]">회</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-[13px]">
          {secondRowItems.map((items) => (
            <div className="flex flex-col gap-[5px] justify-center items-center ">
              <img className="w-[134px] h-[142px]" src={items.imgSrc} />
              <div
                className="text-[25px] font-meetme"
                style={{ color: items.color }}
              >
                {items.name}
              </div>
              <div className="flex items-center gap-[5px]">
                <span className="text-[35px]">{items.value}</span>
                <span className="text-[23px]">회</span>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ShowEmotions;
