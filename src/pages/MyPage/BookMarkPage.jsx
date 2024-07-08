import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import DiaryList from '../../components/SearchPage/DiaryList';
const BookMarkPage = () => {
  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <div className="mt-[70px]">
          <div className="font-extrabold text-[40px]">북마크 일기</div>
          <div className="mb-[40px] font-light text-[24px]">
            내가 북마크한 추억의 일기를 볼 수 있어요.
          </div>
          <DiaryList filterType="emotion" emotion={emotion} />
          <div className="mb-[110px]"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BookMarkPage;
