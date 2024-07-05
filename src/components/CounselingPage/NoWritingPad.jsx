import { useNavigate } from 'react-router-dom';
import back from '../../../public/icon/back.svg';
const NoWritingPad = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/counseling');
  };
  const handleWriting = () => {
    navigate('/writing');
  };
  return (
    <div>
      <div className="transform scale-75 relative top-[-220px]">
        <div className="box-content border-[1px] border-black w-[1600px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-200px] pb-[20px]">
          <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-start gap-[616px] items-center">
            <img src={back} onClick={handleBack} className="cursor-pointer" />
            <div className="font-medium text-[35px]">To.QUDDY</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[64px]">
            <div className="mt-[358px] font-light text-[50px] text-[#7c7c7c]">
              편지지가 없는데 일기작성하러 갈까요?
            </div>
            <button
              className="bg-[#D8B18E] w-[226px] h-[64px] rounded-[13px] font-bold text-[23px]"
              onClick={handleWriting}
            >
              일기 작성하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoWritingPad;
