import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import SearchList from '../../components/SearchPage/SearchList';
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
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default SearchListPage;
