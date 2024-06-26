import msg from '@assets/msg.svg';

const CounselingTopBar = () => {
  return (
    <div className="flex items-center gap-[30px] w-[1567px] h-[95px] bg-[#F7F3EF] border-[3px] border-black transform scale-75 mt-[111px] rounded-[20px] mb-[20px]">
      <img className="ml-[67px]" src={msg}></img>
      <div className="font-meetme text-[40px]">
        쿼디에게 고민을 털어놓아보세요
      </div>
    </div>
  );
};

export default CounselingTopBar;
