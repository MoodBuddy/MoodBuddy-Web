import CounselingTopBar from '../../components/CounselingPage/CounselingTopBar';
import Letter from '../../components/CounselingPage/Letter';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';

const WritingLetterPage = () => {
  return (
    <div>
      <NavBar />

      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <CounselingTopBar />
        <Letter />
      </div>
      <div className="relative top-[-180px]">
        <Footer />
      </div>
    </div>
  );
};
export default WritingLetterPage;
