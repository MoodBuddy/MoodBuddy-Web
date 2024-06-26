import { useState } from 'react';
import back from '../../../public/icon/back.svg';
const Letter = () => {
  const [content, setContent] = useState('');

  return (
    <div className="border-[1px] border-black w-[1571px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-180px]">
      <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-between items-center">
        <img src={back} />
        <div className="font-medium text-[35px]">To.QUDDY</div>
        <button className="w-[130px] h-[62px] rounded-[13px] bg-[#D8B18E] font-bold text-[20px]">
          보내기
        </button>
      </div>
      <div className="relative w-full h-full flex justify-center">
        <div
          className={`absolute inset-0 flex justify-center items-center pointer-events-none ${content ? 'hidden' : ''}`}
        >
          <p className="font-light text-[30px] leading-[66px] text-center whitespace-pre-wrap pb-[150px]">
            고민이 있다면 저에게 말해봐요 ! <br /> 내가 다음날 답장을 보내줄게요
            <br />
            나에게 고민을 털어버리고 훌훌 털어버려요
          </p>
        </div>
        <textarea
          type="text"
          className=" my-[105px] font-light text-[30px] leading-[66px] bg-[#F7F3EF] outline-none w-[1300px] h-[1100px] overflow-y-auto custom-scrollbar"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Letter;
