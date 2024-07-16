import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHours, isAfter } from 'date-fns';
import { formatDate } from '../../utils/format';

const MailBoxContent = ({ letter }) => {
  const navigate = useNavigate();
  const [replyMessage, setReplyMessage] = useState('');

  const handleMailBox = () => {
    navigate(`/counseling/letter/${letter.letterId}`);
  };

  useEffect(() => {
    if (letter.letterCreatedTime) {
      const createdTime = new Date(letter.letterCreatedTime);
      const twelveHoursLater = addHours(createdTime, 12);
      const currentTime = new Date();

      if (isAfter(currentTime, twelveHoursLater)) {
        setReplyMessage('ㅣ 답장이 도착했어요.');
      } else {
        setReplyMessage('');
      }
    }
  }, [letter.letterCreatedTime]);

  const formattedDate = formatDate(letter.letterCreatedTime);

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
