import QuddyLetterContent from '../../components/CounselingPage/QuddyLetterContent';
import QuddyLetterTopBar from '../../components/CounselingPage/QuddyLetterTopBar';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';

const QuddyLetter = () => {
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <QuddyLetterTopBar />
        <QuddyLetterContent />
      </div>
    </>
  );
};
export default QuddyLetter;
