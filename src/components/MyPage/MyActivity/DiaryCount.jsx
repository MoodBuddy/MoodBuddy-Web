import { MonthlyCountList } from '../../../constants/MonthlyCountList';
import Dropdown from './Dropdown';
import MonthlyCount from './MonthlyCount';

const DiaryCount = () => {
  return (
    <div className="w-[469px] h-[679px] bg-[#F7F3EF] rounded-[30px] border-[3px] border-black">
      <div className="flex flex-col">
        <div className="font-semiBold text-[20px] text-[#868686] ml-[35px] mt-[26px]">
          현재까지 작성한 일기 횟수
        </div>
        <div className="flex gap-[23px] mt-[60px] ml-[35px]">
          <Dropdown />
          <div className="flex flex-col gap-[30px] h-[493px] overflow-y-auto custom-scrollbar ">
            {MonthlyCountList.map((items) => (
              <MonthlyCount month={items.month} count={items.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiaryCount;
