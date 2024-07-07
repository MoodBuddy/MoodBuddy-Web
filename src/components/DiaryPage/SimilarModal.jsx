import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import close from '../../../public/icon/close.svg';
import DiaryList from '../SearchPage/DiaryList';
import Button from '../common/button/Button';


const SimilarModal = ({ onClose, emotion }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-60"
        onClick={onClose}
      ></div>
      <dialog
        open
        className="z-50 bg-[#F7F3EF] border-2 border-black rounded-[60px] top-[10%]"
      >
        <button onClick={onClose} className="absolute top-3 right-2 m-10 z-10">
          <img src={close} alt="close" className="w-6 h-6" />
        </button>

        <div className="transform scale-90">
          <div>
            <h1 className="font-meetme text-6xl mb-2">비슷한 추억 보기</h1>
            <p className="text-zinc-500 text-xl">
              오늘과 비슷한 감정을 가진 날의 일기를 보여드릴게요!
            </p>
          </div>

          <div className="h-[750px] overflow-hidden">
            <DiaryList filterType="emotion" emotion={emotion}/>
          </div>

          <div className="flex justify-end mt-20">
            <Button onClick={handleGoHome}>
              <p className="p-1.5">메인화면으로 돌아가기</p>
            </Button>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal-root'),
  );
};

export default SimilarModal;
