import Card from './Card';
import happyQuddy from '@assets/happyQuddy.svg';

const RankingCard = () => {
  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center ">
          <h1 className="text-3xl font-bold">1위 쿼디</h1>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          현재 1순위 감정 쿼디예요.
        </div>

        <div className="my-12 ml-8">
          <img src={happyQuddy} alt="happyQuddy" className="w-[193px] h-[204px]"/>
        </div>

        <div className="flex justify-end mr-6">
          <h1 className="text-[40px] font-medium">2 회</h1>
        </div>
      </div>
    </Card>
  );
};

export default RankingCard;
