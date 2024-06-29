import { useNavigate } from 'react-router-dom';

const MailBoxNoContent = () => {
  const navigate = useNavigate();
  const MailBoxHandler = () => {
    navigate('/counseling/');
  };
  return (
    <div
      onClick={MailBoxHandler}
      className="flex items-center w-full h-[58px] pl-[25px] box-content py-[15px] font-medium text-[25px] border-b-[1px] border-[#D1D1D1] cursor-pointer"
    >
      2024.04.22 (토) ㅣ 쿼디에게 고민을 보냈어요.
    </div>
  );
};
export default MailBoxNoContent;
