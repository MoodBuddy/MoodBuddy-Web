import { useQuery } from '@tanstack/react-query';
import CounselingTopBar from '../../components/CounselingPage/CounselingTopBar';
import MailBox from '../../components/CounselingPage/MailBox';
import Profile from '../../components/CounselingPage/Profile';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import { getLetter } from '../../apis/letter';

const CounselingPage = () => {
  const {
    isError,
    data: letter,
    error,
  } = useQuery({
    queryKey: ['letter'],
    queryFn: () => getLetter(),
  });

  if (isError) {
    console.error('Error fetching letter:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <CounselingTopBar />
        <div className=" transform scale-75 relative top-[-180px]">
          <div className="flex justify-center gap-[19px]">
            <Profile data={letter} />
            <MailBox letters={letter.letterResPageAnswerDTOList} />
          </div>
        </div>
      </div>
      <div className="relative top-[-180px]">
        <Footer />
      </div>
    </>
  );
};
export default CounselingPage;
