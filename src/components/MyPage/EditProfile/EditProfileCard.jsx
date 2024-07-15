import profile from '@assets/profile.png';
import { useState } from 'react';
import Toggle from '../../common/toggle/Toggle';
import TimePicker from '../../common/timePicker/TimePicker';
import { getProfile, postProfileEdit } from '../../../apis/user';
import useUserStore from '../../../store/userStore';
import { useQuery } from '@tanstack/react-query';

const EditProfileCard = () => {
  const userInfo = useUserStore((state) => ({
    nickname: state.nickname,
    userBirth: state.userBirth,
    profileImgURL: state.profileImgURL,
  }));

  const { isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
  console.log(data);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error('Error fetching user info:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [notificationTime, setNotificationTime] = useState('');
  const [profileImage, setProfileImage] = useState(profile);

  const [state, setState] = useState({
    nickname: userInfo.nickname || '',
    birthDate: userInfo.userBirth || '',
    profileComment: '',
    newProfileImg: null,
    gender: true,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleChange = (toggleState) => {
    setIsNotificationEnabled(toggleState);
  };

  const handleTimeChange = (newTime) => {
    setNotificationTime(newTime);
  };

  const getBirthDatePlaceholder = () => {
    if (data.birthday) {
      return data.birthday;
    } else {
      return 'ex. 2002-08-19 (8자리)';
    }
  };

  const getNamePlaceholder = () => {
    if (data.nickname) {
      return data.nickname;
    } else {
      return '닉네임을 설정하세요';
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setState({ ...state, newProfileImg: file });
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setState({ ...state, newProfileImg: null });
    setProfileImage(profile);
  };

  const handleResetNotification = () => {
    // fcm 토큰 로직 추가
  };

  const handleSubmit = async () => {
    const profileData = {
      profileComment: state.profileComment,
      alarm: isNotificationEnabled,
      alarmTime: notificationTime,
      newProfileImg: state.newProfileImg,
      nickname: state.nickname,
      gender: state.gender,
      birthday: state.birthDate,
    };

    try {
      console.log(profileData);
      const response = await postProfileEdit(profileData);
      console.log('프로필 저장 성공', response);
    } catch (error) {
      console.error('프로필 변경에 실패했습니다.', error);
    }
  };

  return (
    <div className="w-[1180px] h-[679px] bg-[#F7F3EF] border-[3px] border-black rounded-[30px]">
      <div className="flex flex-row">
        <div className="flex flex-col mt-[35px] ml-[65px]">
          <div className="text-[20px] ml-[15px] mb-[10px] font-bold">
            프로필 사진
          </div>
          <img
            src={data.url}
            className="w-[377px] h-[444px] rounded-3xl object-cover"
          />
          <div className="flex flex-row gap-[5px] justify-center mt-[16.5px]">
            <button
              className="w-[178px] h-[43px] rounded-[14px] bg-[#E8D3C0] text-[19px] font-medium"
              onClick={handleImageDelete}
            >
              삭제
            </button>
            <label className="w-[178px] h-[43px] rounded-[14px] bg-[#C79A76] text-[19px] font-medium flex items-center justify-center cursor-pointer">
              사진 변경
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] ml-[70px] mt-[36px]">
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">닉네임 변경</div>
            <input
              name="nickname"
              type="text"
              onChange={handleChangeState}
              className="w-[613px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[10px] border-[1px] border-black px-7"
              placeholder={`${data.nickname || ''}`}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">생년월일 변경</div>
            <input
              name="birthDate"
              type="text"
              onChange={handleChangeState}
              className="w-[613px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[10px] border-[1px] border-black px-7"
              placeholder={`${getBirthDatePlaceholder()}`}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">카카오톡 알림</div>
            <div className="flex gap-[40px] items-center">
              <Toggle onToggleChange={handleToggleChange} />
              {isNotificationEnabled && (
                <>
                  <TimePicker onTimeChange={handleTimeChange} />
                  <button
                    className="w-[130px] h-[43px] rounded-[14px] bg-[#C79A76] text-lg font-medium"
                    onClick={handleResetNotification}
                  >
                    재설정
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">한줄소개 변경</div>
            <textarea
              name="profileComment"
              placeholder={data.profileComment}
              onChange={handleChangeState}
              className="w-[613px] h-[168px] rounded-[10px] border-[1px] border-black p-[15px]"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="w-[178px] h-[43px] rounded-[14px] bg-[#C79A76] text-lg font-medium"
              onClick={handleSubmit}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileCard;
