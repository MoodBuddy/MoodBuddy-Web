import profile from '@assets/profile.png';
import { useState } from 'react';
import Toggle from '../../common/toggle/Toggle';
import TimePicker from '../../common/timePicker/TimePicker';
import { postProfileEdit } from '../../../apis/user';
import { handleAllowNotification } from '../../../service/notificationPermission';

const EditProfileCard = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [notificationTime, setNotificationTime] = useState('');

  const [state, setState] = useState({
    nickname: '',
    birthDate: '',
    profileComment: '',
    newProfileImg: '',
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
      console.log('Profile updated successfully', response);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleResetNotification = async () => {
    await handleAllowNotification();
  };

  return (
    <div className="w-[1180px] h-[679px] bg-[#F7F3EF] border-[3px] border-black rounded-[30px]">
      <div className="flex flex-row">
        <div className="flex flex-col mt-[35px] ml-[65px]">
          <div className="text-[20px] ml-[15px] mb-[10px] font-bold">
            프로필 사진
          </div>
          <img src={profile} className="w-[377px] h-[444px]" />
          <div className="flex flex-row gap-[5px] justify-center mt-[16.5px]">
            <button className="w-[178px] h-[43px] rounded-[14px] bg-[#E8D3C0] text-[19px] font-medium">
              삭제
            </button>
            <button className="w-[178px] h-[43px] rounded-[14px] bg-[#C79A76] text-[19px] font-medium">
              사진 변경
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] ml-[70px] mt-[36px]">
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">닉네임 변경</div>
            <input
              name="nickname"
              type="text"
              value={state.nickname}
              onChange={handleChangeState}
              className="w-[613px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[10px] border-[1px] border-black px-7"
              placeholder="현재 닉네임"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">생년월일 변경</div>
            <input
              name="birthDate"
              type="text"
              value={state.birthDate}
              onChange={handleChangeState}
              className="w-[613px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[10px] border-[1px] border-black px-7"
              placeholder="2002.08.19 (8자리)"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="font-bold text-[20px]">카카오톡 알림 재설정</div>
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
              value={state.profileComment}
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
