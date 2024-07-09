import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/format';

const MailBoxContent = ({ letter }) => {
  const navigate = useNavigate();

  const handleMailBox = () => {
    navigate(`/counseling/letter/${letter.letterId}`);
  };

  const formattedDate = formatDate(letter.letterCreatedTime);
  const replyMessage = letter.answerCheck !== 0 ? 'ㅣ 답장이 도착했어요.' : '';

  return (
    <div
      onClick={handleMailBox}
      className="flex items-center w-full h-[58px] pl-[25px] box-content py-[15px] font-medium text-[25px] border-b-[1px] border-[#D1D1D1] cursor-pointer"
    >
      {formattedDate} ㅣ 쿼디에게 고민을 보냈어요. {replyMessage}
    </div>
  );
};

export default MailBoxContent;
