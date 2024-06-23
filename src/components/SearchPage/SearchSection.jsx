import { useState } from 'react';
import Button from '../common/button/Button';
import { quddies } from '../../constants/QuddyList';
import { topics } from '../../constants/TopicList';
import searchIcon from '../../../public/icon/searchIcon.svg';

const SearchBar = () => {
  const [showDetailOptions, setShowDetailOptions] = useState(false);

  const toggleDetailOptions = () => {
    setShowDetailOptions(!showDetailOptions);
  };

  return (
    <div className="w-full relative">
      <div className="flex flex-col items-center gap-4 mt-16">
        <div className="flex justify-center items-center gap-4 relative z-50">
          <div className="relative">
            <input
              type="text"
              className="w-[900px] h-[66px] text-2xl placeholder-stone-300 bg-white rounded-[18px] border-2 border-black px-10"
              placeholder="검색어를 입력하세요."
            />
            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
          <Button
            className="w-[157px] h-[57px] bg-[#C79A76] rounded-2xl text-2xl font-normal"
            onClick={toggleDetailOptions}
          >
            상세검색
          </Button>
        </div>
      </div>

      {/* 상세검색 옵션 */}
      {showDetailOptions && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleDetailOptions}
          />
          <div className="flex flex-col items-center absolute top-0 w-full bg-[#E8DBCF] z-30 transition duration-500 ease-in-out">
            <div className="flex flex-col gap-4 mt-36">
              {/* 날짜 검색 */}
              <div className="flex gap-4 items-center mr-40">
                <span className="text-zinc-700 text-2xl mr-20">날짜 검색</span>
                <input
                  className="w-[706px] h-[62px] text-2xl placeholder-stone-300 bg-white/opacity-90 rounded-2xl border border-neutral-400 px-10"
                  placeholder="년 월"
                />
              </div>

              {/* 주제 검색 */}
              <div className="flex gap-4 items-center">
                <span className="text-zinc-700 text-2xl mr-20">주제 검색</span>
                <div className="flex gap-4">
                  {topics.map((topic, index) => (
                    <Button
                      key={index}
                      color="white"
                      className="rounded-[14.45px] border border-neutral-400"
                    >
                      <p className="px-12 py-1 text-neutral-500 text-xl font-medium">
                        {topic.label}
                      </p>
                    </Button>
                  ))}
                </div>
              </div>

              {/* 쿼디 검색 */}
              <div className="flex gap-4 mb-24">
                <span className="text-zinc-700 text-2xl mr-20">쿼디 검색</span>
                <div className="flex gap-4">
                  {quddies.map((quddy, index) => (
                    <button
                      key={index}
                      className="flex flex-col items-center gap-3"
                    >
                      <img
                        src={quddy.imgSrc}
                        alt={quddy.text}
                        className="w-[87px] h-[100px]"
                      />
                      <span className="text-lg">{quddy.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
