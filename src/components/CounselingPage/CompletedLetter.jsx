import { useNavigate } from 'react-router-dom';
import back from '../../../public/icon/back.svg';
import letterContent from '../../store/contentStore';
import { formatDate } from '../../utils/format';

const CompletedLetter = () => {
  const { content } = letterContent();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/counseling');
  };

  const todayDate = formatDate();

  return (
    <div>
      <div className="transform scale-75 relative top-[-220px]">
        <div className="box-content border-[1px] border-black w-[1600px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-200px] pb-[20px]">
          <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-start gap-[616px] items-center">
            <img src={back} onClick={handleBack} className="cursor-pointer" />
            <div className="font-medium text-[35px]">To.QUDDY</div>
          </div>
          <div className="flex flex-col">
            <div className="text-center mt-[150px] mx-auto font-light text-[30px] leading-[66px] bg-[#F7F3EF] outline-none w-[1300px] h-[1100px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
              {content}
            </div>
            <div className="flex flex-col items-end font-medium text-[30px] pr-[80px] gap-[10px] ">
              <div>{todayDate}</div>
              <div>From.닉네임</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompletedLetter;
