import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailBoxContent = () => {
  const navigate = useNavigate();
  const [reply, setReply] = useState(false);
  const handleMailBox = () => {
    navigate('/counseling/letter');
  };
  return (
    <div
      onClick={handleMailBox}
      className="flex items-center w-full h-[58px] pl-[25px] box-content py-[15px] font-medium text-[25px] border-b-[1px] border-[#D1D1D1] cursor-pointer"
    >
      2024.04.22 (토) ㅣ 쿼디에게 고민을 보냈어요.{' '}
      {reply ? 'ㅣ답장이 도착했어요.' : ''}
    </div>
  );
};
export default MailBoxContent;
