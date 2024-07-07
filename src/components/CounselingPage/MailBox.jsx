import MailBoxContent from './MailBoxContent';

const MailBox = () => {
  // 첫페이지 api가 안나온 이슈로, 임의로 id 설정
  const letterIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="w-[875px] h-[1105px] bg-[#F7F3EF] rounded-[20px]">
      <div className="font-semibold text-[22.5px] my-[25px] ml-[28.5px]">
        보낸 편지함
      </div>
      <div className="border-b-[0.75px] border-black"></div>
      <div className="h-[1005px] overflow-y-auto overflow-x-hidden custom-scrollbar">
        {letterIds.map((id) => (
          <MailBoxContent key={id} letterId={id} />
        ))}
      </div>
    </div>
  );
};

export default MailBox;
