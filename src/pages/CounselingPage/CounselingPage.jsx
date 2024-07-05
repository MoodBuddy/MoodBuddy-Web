import CounselingTopBar from '../../components/CounselingPage/CounselingTopBar';
import MailBox from '../../components/CounselingPage/MailBox';
import Profile from '../../components/CounselingPage/Profile';
import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';

const CounselingPage = () => {
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <CounselingTopBar />
        <div className=" transform scale-75 relative top-[-180px]">
          <div className="flex justify-center gap-[19px]">
            <Profile />
            <MailBox />
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
