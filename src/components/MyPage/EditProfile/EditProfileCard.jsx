import profile from '@assets/profile.png';
import { useState, useEffect } from 'react';
import Toggle from '../../common/toggle/Toggle';
import TimePicker from '../../common/timePicker/TimePicker';
import { getProfile, postProfileEdit } from '../../../apis/user';
import { useQuery } from '@tanstack/react-query';
import Button from '../../common/button/Button';
import ProfileEditModal from './ProfileEditModal';
import defaultProfile from '../../../../public/image/defaultProfile.png';
import { handleAllowNotification } from '../../../service/notificationPermission';

const EditProfileCard = () => {
  const { isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [notificationTime, setNotificationTime] = useState('');
  const [profileImage, setProfileImage] = useState(profile);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState({
    nickname: '',
    birthDate: '',
    profileComment: '',
    newProfileImg: null,
    gender: true,
  });

  useEffect(() => {
    if (data) {
      setState({
        nickname: data.nickname || '',
        birthDate: data.birthday || '',
        profileComment: data.profileComment || '',
        newProfileImg: null,
        gender: data.gender || true,
      });
      setProfileImage(data.url || profile);
    }
  }, [data]);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error('Error fetching user info:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  const handleChangeState = (e) => {
    const { name, value } = e.target;

    if (name === 'birthDate') {
      const regex = /^[0-9-]*$/;
      if (!regex.test(value)) {
        return;
      }
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleToggleChange = (toggleState) => {
    setIsNotificationEnabled(toggleState);
  };

  const handleTimeChange = (newTime) => {
    setNotificationTime(newTime);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setState({ ...state, newProfileImg: file });
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setState({ ...state, newProfileImg: null });
    setProfileImage(defaultProfile);
  };

  const handleSubmit = async () => {
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (state.nickname.trim() === '') {
      setModalMessage('닉네임을 입력해주세요!');
      setShowModal(true);
      return;
    }

    if (!birthDateRegex.test(state.birthDate)) {
      setModalMessage('생년월일을 2000-01-01 형식으로 입력해주세요 !');
      setShowModal(true);
      return;
    }
    const formData = new FormData();
    formData.append('nickname', state.nickname);
    formData.append('birthday', state.birthDate);
    formData.append('profileComment', state.profileComment);
    formData.append('alarm', isNotificationEnabled);
    formData.append('alarmTime', notificationTime);

    if (state.newProfileImg) {
      formData.append('newProfileImg', state.newProfileImg);
    }

    try {
      setModalMessage('');
      setShowModal(true);
      setIsValid(true);
      await postProfileEdit(formData);
      setModalMessage('프로필이 성공적으로 저장되었습니다.');
    } catch (error) {
      setModalMessage('프로필 저장에 실패했습니다. 다시 시도해주세요.');
      setIsValid(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleResetNotification = () => {
    handleAllowNotification();
  };

  return (
    <div className="w-[1180px] h-[679px] bg-[#F7F3EF] border-[3px] border-black rounded-[30px] relative">
      <div className="flex flex-row">
        <div className="flex flex-col mt-[35px] ml-[65px]">
          <div className="text-[20px] ml-[15px] mb-[10px] font-bold">
            프로필 사진
          </div>
          <img
            src={profileImage}
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
              value={state.nickname}
              onChange={handleChangeState}
              className="w-[613px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[10px] border-[1px] border-black px-7"
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
              value={state.profileComment}
              onChange={handleChangeState}
              className="w-[613px] h-[168px] rounded-[10px] border-[1px] border-black p-[15px] resize-none"
            />
          </div>
          <div className="flex justify-end">
            <Button
              className="w-[178px] h-[43px] rounded-[14px] bg-[#C79A76] text-lg font-medium"
              onClick={handleSubmit}
            >
              저장
            </Button>
          </div>
        </div>
      </div>

      {showModal && (
        <ProfileEditModal
          message={modalMessage}
          onClose={handleCloseModal}
          isValid={isValid}
        />
      )}
    </div>
  );
};

export default EditProfileCard;
