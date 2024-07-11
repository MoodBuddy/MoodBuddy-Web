import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import DiaryList from '../../components/SearchPage/DiaryList';
import SearchBar from '../../components/SearchPage/SearchSection';
import styles from '@styles/check.module.css';

const SearchListPage = () => {
  return (
    <div>
      <NavBar />
      <div
        className={`flex flex-col justify-center items-center ${styles.check}`}
      >
        <SearchBar />
        <DiaryList filterType="search" />
      </div>
      <Footer />
    </div>
  );
};

export default SearchListPage;
