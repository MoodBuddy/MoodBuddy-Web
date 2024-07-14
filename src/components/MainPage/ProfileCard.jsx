import useUserStore from '../../store/userStore';
import Card from './Card';

const ProfileCard = () => {
  const userInfo = useUserStore((state) => ({
    profileNickName: state.profileNickName,
    userBirth: state.userBirth,
    profileImgURL: state.profileImgURL,
    profileComment: state.profileComment,
  }));
  const profileNickName = userInfo.profileNickName;
  const userBirth = userInfo.userBirth;
  const profileImgURL = userInfo.profileImgURL;
  const profileComment = userInfo.profileComment;

  return (
    <Card>
      <div className="justify-center items-center h-full mt-8">
        <div className="flex gap-8 px-2 items-center">
          <h1 className="text-3xl font-bold">{profileNickName}</h1>
          <p className="text-[#7A7A7A]">{userBirth}</p>
        </div>
        <div className="text-[20px] text-[#7A7A7A] my-3 px-2">
          {profileNickName ? 'profileComment' : ''}
        </div>

        <div className="flex justify-center">
          {profileNickName ? (
            <img
              src={profileImgURL}
              alt="profile"
              className="w-[344px] h-[342px] border-solid border-2 border-black rounded-3xl object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-[342px]">
              <p className="text-3xl font-bold">아직 프로필이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
