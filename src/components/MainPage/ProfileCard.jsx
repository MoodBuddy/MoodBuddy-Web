import Card from './Card';
import profile from '@assets/profile.png';

const ProfileCard = () => {
  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center">
          <h1 className="text-3xl font-bold">성나영</h1>
          <p className="text-[#7A7A7A]">2002.08.19</p>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">오늘 하루도 화이팅 ~</div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-[344px] h-[342px] border-solid border-[3px] border-black rounded-3xl object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
