import Card from './Card';
import halfHappyQuddy from '@assets/halfHappyQuddy.svg';

const CountCard = () => {
  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center ">
          <h1 className="text-3xl font-bold">누적 일기 횟수</h1>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          이번 달에 쓴 일기 횟수예요.
        </div>

        {/* 횟수 카운트 */}
        <div className="flex items-end justify-center gap-4 my-12">
          <div className="border rounded-[18px] border-black">
            <h1 className="text-9xl font-medium text-center px-12 py-2">20</h1>
          </div>
          <p className="text-4xl font-medium">회</p>
        </div>

        <div className="flex justify-center">
          <img src={halfHappyQuddy} alt="halfHappyQuddy" className="mt-2" />
        </div>
      </div>
    </Card>
  );
};

export default CountCard;
