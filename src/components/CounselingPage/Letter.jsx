import { useState } from 'react';
import back from '../../../public/icon/back.svg';
import SelectModal from './SelectModal';
import useContentStore from '../../store/contentStore';

const Letter = () => {
  const { content, setContent } = useContentStore();

  const [sending, setSending] = useState(false);
  const isSending = () => {
    setSending(!sending);
  };

  return (
    <div>
      <div className="transform scale-75 relative top-[-220px]">
        <div className="box-content border-[1px] border-black w-[1600px] h-[1477px] bg-[#F7F3EF] rounded-[25px] transform scale-75 relative top-[-200px] pb-[20px]">
          <div className="px-[23px] w-full h-[98px] border-b-[1px] border-black flex justify-between items-center ">
            <img src={back} />
            <div className="font-medium text-[35px]">To.QUDDY</div>
            <button
              onClick={isSending}
              className="w-[130px] h-[62px] rounded-[13px] bg-[#D8B18E] font-bold text-[20px]"
            >
              보내기
            </button>
          </div>
          <div className="gap-[95px] flex flex-col justify-center items-center ">
            <textarea
              type="text"
              className="mt-[150px] text-center font-light text-[30px] leading-[66px] bg-[#F7F3EF] outline-none w-[1300px] h-[1005px] overflow-y-auto custom-scrollbar"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="고민이 있다면 저에게 말해봐요 !
내가 다음날 답장을 보내줄게요.
나에게 고민을 털어버리고 훌훌 털어버려요"
            />
            <div className="self-end flex flex-col items-end font-medium text-[30px] pr-[80px] gap-[10px] ">
              <div>2024.04.22 (토)</div>
              <div>From.닉네임</div>
            </div>
          </div>
        </div>
      </div>
      <SelectModal sending={sending} setSending={setSending} />
    </div>
  );
};
export default Letter;
