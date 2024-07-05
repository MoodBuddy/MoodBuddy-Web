import MailBoxContent from './MailBoxContent';

const MailBox = () => {
  return (
    <div className="w-[875px] h-[1105px] bg-[#F7F3EF] rounded-[20px] ">
      <div className="font-semibold text-[22.5px] my-[25px] ml-[28.5px]">
        보낸 편지함
      </div>
      <div className="border-b-[0.75px] border-black"></div>
      <div className="h-[1005px] overflow-y-auto overflow-x-hidden custom-scrollbar">
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
        <MailBoxContent />
      </div>
    </div>
  );
};
export default MailBox;
