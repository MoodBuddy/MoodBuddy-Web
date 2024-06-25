import { useParams } from 'react-router-dom';
import { diaryData } from '../../mocks/mockData';
import NavBar from '../../components/common/layout/NavBar';
import Footer from '../../components/common/layout/Footer';
import DiarySection from '../../components/DiaryPage/DiarySection';
import styles from '@styles/check.module.css';

const DiaryPage = () => {
  const { id } = useParams();
  const data = diaryData.find((item) => item.id === parseInt(id));

  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <DiarySection data={data} />
      </div>
      <Footer />;
    </>
  );
};

export default DiaryPage;
