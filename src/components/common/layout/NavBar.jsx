import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MenuList } from '../../../constants/MenuList';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { checkTodayDiary, getProfile } from '../../../apis/user';
import ProfileInfo from './ProfileInfo';
import MyPageDropdown from './MyPageDropdown';
import AlertModal from './AlertModal';
import useCalendarClickStore from '../../../store/calendarClick';

const NavBar = () => {
  const [hoveredMyPage, setHoveredMyPage] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [writing, setWriting] = useState(false);
  const { setCalendarClick } = useCalendarClickStore();

  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = () => {
    setHoveredMyPage(true);
  };

  const handleMouseLeave = () => {
    setHoveredMyPage(false);
  };

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const { isError, data, error } = useQuery({
    queryKey: ['getProfile'],
    queryFn: getProfile,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error('Error fetching user info:', error);
    return <div>오류 발생: {error.message}</div>;
  }

  const {
    data: diaryData,
    isError: diaryError,
    error: diaryErrorDetail,
  } = useQuery({
    queryKey: ['checkTodayDiary'],
    queryFn: checkTodayDiary,
  });

  useEffect(() => {
    console.log(diaryData);
  }, [diaryData]);

  const handleMenuClick = (event, to) => {
    setCalendarClick(false);
    event.preventDefault(); // 기본 동작 방지
    if (!diaryData.checkTodayDairy) {
      setIsModal(true);
    } else {
      navigate(to);
    }
  };

  const handleLogo = () => {
    navigate('/home');
  };

  const handleButtonClick = () => {
    setIsModal(false);
    navigate('/search');
  };

  return (
    <div>
      <div className="flex relative w-full z-20 bg-[#E8DBCF] h-[75px] justify-around ">
        <div onClick={handleLogo} className="flex items-center text-2xl mr-12 ">
          <h1 className="font-meetme cursor-pointer">MOODBUDDY</h1>
        </div>

        <div className="flex items-center font-meetme gap-32 text-xl font-semibold">
          {MenuList.map((item) => (
            <div
              key={item.id}
              onMouseEnter={item.id === 5 ? handleMouseEnter : undefined}
              onMouseLeave={item.id === 5 ? handleMouseLeave : undefined}
              className="relative h-full flex items-center"
            >
              <NavLink
                to={item.to}
                onClick={
                  item.id === 2
                    ? (event) => handleMenuClick(event, item.to)
                    : undefined
                }
                className={({ isActive }) =>
                  isActive ||
                  (item.id === 5 && location.pathname.startsWith('/mypage')) ||
                  (item.id === 3 && location.pathname.startsWith('/diary'))
                    ? 'text-[#B98D6D]'
                    : 'hover:text-[#B98D6D] transition-colors duration-75'
                }
                key={item.id}
              >
                {item.name}
              </NavLink>
              {hoveredMyPage && item.id === 5 && (
                <MyPageDropdown subMenu={item.subMenu} />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center ml-12 relative">
          <div
            onClick={handleProfileClick}
            className="flex items-center cursor-pointer gap-3"
          >
            <img
              src={data.url}
              alt="profileImgURL"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="text-lg font-medium">{data.nickname}</h1>
          </div>

          {showProfileDetails && <ProfileInfo data={data} />}
        </div>
      </div>
      <div className="border-b-[1px] border-[#B98D6D]"> </div>
      {isModal && (
        <AlertModal
          handleButtonClick={handleButtonClick}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
};

export default NavBar;
