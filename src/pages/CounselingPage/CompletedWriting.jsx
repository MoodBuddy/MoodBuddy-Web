import CounselingTopBar from '../../components/CounselingPage/CounselingTopBar';
import CompletedLetter from '../../components/CounselingPage/CompletedLetter';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';

const CompletedWriting = () => {
  return (
    <>
      <NavBar />

      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <CounselingTopBar />
        <CompletedLetter />
      </div>
      <Footer />
    </>
  );
};
export default CompletedWriting;
