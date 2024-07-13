import useUserStore from '../../store/userStore';
import Card from './Card';

const ProfileCard = () => {
  const userInfo = useUserStore((state) => ({
    profileNickName: state.profileNickName,
    userBirth: state.userBirth,
    profileImgURL: state.profileImgURL,
  }));
  const profileNickName = userInfo.profileNickName;
  const userBirth = userInfo.userBirth;
  const profileImgURL = userInfo.profileImgURL;

  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center">
          <h1 className="text-3xl font-bold">{profileNickName}</h1>
          <p className="text-[#7A7A7A]">{userBirth}</p>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          {profileNickName ? '오늘 하루도 화이팅 ~' : ''}
        </div>

        <div className="flex justify-center">
          {profileNickName ? (
            <img
              src={profileImgURL}
              alt="profile"
              className="w-[344px] h-[342px] border-solid border-2 border-black rounded-3xl object-cover"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
