import { useNavigate } from 'react-router-dom';

const Profile = ({ data }) => {
  const navigate = useNavigate();
  const handleWritingLetter = () => {
    navigate('/counseling/writingLetter');
  };
  return (
    <div className=" flex flex-col items-center w-[286px] h-[619px] bg-[#F7F3EF] rounded-2xl">
      <div className="transform scale-75 relative top-[-110px]">
        <button
          onClick={handleWritingLetter}
          className="w-[332px] h-[71px] rounded-[30px] bg-[#C79A76] font-semibold text-[30px] mt-[58px]"
        >
          편지 쓰기
        </button>
        <div className="flex justify-between items-center w-[283px] mt-[25px] ml-[20px]">
          <div className="text-[28px] ">남은 편지지 개수</div>
          <div className="font-semibold text-[40px]">{data.userLetterNums}</div>
        </div>
        <div className="text-[18px] mt-[10px] flex justify-start w-[285px] text-[#676767]  ml-[20px] ">
          일기를 작성하면 편지지가 주어져요!
        </div>
        <div className="w-full border-b-[1px] border-[#888888] mt-[26px]"></div>

        <img
          src={data.profileImageUrl}
          className="mt-[35px] mx-auto w-[320px] h-[360px] rounded-3xl object-cover"
        ></img>
        <div className="ml-3">
          <div className="flex items-end mt-[20px]">
            <div className="font-semibold text-4xl mr-4">
              {data.profileNickname}강민하
            </div>
            <div className="font-thin text-xl">{data.userBirth}</div>
          </div>
          <div className="text-2xl mt-4 whitespace-pre-wrap">
            {data.profileComment}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
