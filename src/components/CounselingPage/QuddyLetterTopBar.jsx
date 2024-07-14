import msg from '@assets/msg.svg';
import { formatDate } from '../../utils/format';

const QuddyLetterTopBar = ({ data }) => {
  const formattedDate = formatDate(data.letterDate);

  const replyMessage =
    data.letterFormat === 1 ? '따뜻한 위로의 말' : '따끔한 해결의 말';

  return (
    <div className="transform scale-[85%]">
      <div className="flex items-center gap-[30px] w-[1600px] h-[95px] bg-[#F7F3EF] border-[3px] border-black transform scale-75 mt-[48px] rounded-[20px] mb-[25px]">
        <img className="ml-[67px]" src={msg} alt="message icon" />
        <div className="font-meetme text-[40px]">
          {data.letterAnswerContent
            ? `${formattedDate} | 쿼디에게 "${replyMessage}" 답장이 도착했어요`
            : `${formattedDate} | 아직 답장이 도착하지 않았어요`}
        </div>
      </div>
    </div>
  );
};

export default QuddyLetterTopBar;
