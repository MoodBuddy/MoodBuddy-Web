import Button from '../../common/button/Button';
import happyQuddy from '@assets/happyQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import close from '../../../../public/icon/close.svg';
import { useNavigate } from 'react-router-dom';

const ProfileEditModal = ({ message, onClose, isValid }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isValid) {
      navigate('/home');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[600px] h-[480px] rounded-[60px] bg-lightbeige transform scale-90">
        <button onClick={onClose} className="absolute top-8 right-10 z-10">
          <img src={close} alt="close" className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center p-10">
          <h1 className="font-meetme text-6xl my-2">
            {isValid ? '프로필 수정 완료' : '프로필 수정 실패'}
          </h1>

          {!isValid ? (
            <p className="text-zinc-500 text-xl mb-4">{message}</p>
          ) : (
            <></>
          )}

          <img
            src={isValid ? happyQuddy : gloomyQuddy}
            alt="Quiddy"
            className="w-48 h-48 my-6"
          />

          <Button
            className="my-3 px-4 py-2 rounded-xl text-xl"
            onClick={handleButtonClick}
          >
            <p className="px-2 py-1">
              {isValid ? '메인화면으로 돌아가기' : '돌아가기'}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
