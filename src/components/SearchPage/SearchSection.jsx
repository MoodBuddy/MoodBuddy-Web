import searchIcon from '../../../public/icon/searchIcon.svg';
import Button from '../common/button/Button';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-16">
      <div className="relative">
        <input
          type="text"
          className="w-[1048px] h-[66px] text-2xl placeholder-stone-300 bg-white rounded-[17.84px] border-2 border-black pl-12 pr-10"
          placeholder="검색어를 입력하세요."
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
      <div>
        <Button
          className="w-[156.99px] h-[57.41px] bg-[#C79A76] rounded-2xl text-2xl font-normal"
        >
          상세검색
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
