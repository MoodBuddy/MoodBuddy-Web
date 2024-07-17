import { NavLink } from 'react-router-dom';
import { MenuList } from '../../../constants/MenuList';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../../apis/user';
import ProfileInfo from './ProfileInfo';

const NavBar = () => {
  const [hoveredMyPage, setHoveredMyPage] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

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

  return (
    <div>
      <div className="flex relative w-full z-20 bg-[#E8DBCF] h-[75px] justify-around ">
        <div className="flex items-center text-2xl mr-12 ">
          <h1 className="font-meetme">MOODBUDDY</h1>
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
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#B98D6D]'
                    : 'hover:text-[#B98D6D] transition-colors duration-75'
                }
                key={item.id}
              >
                {item.name}
              </NavLink>
              {hoveredMyPage && item.id === 5 && (
                <div className="absolute z-10 top-[75px] left-[-25px] w-max bg-[#E8DBCF] border border-[#B98D6D]">
                  <div className="flex flex-col items-start p-2">
                    <NavLink
                      to="/editProfile"
                      className="py-1 px-4 hover:bg-[#D8C3B3]"
                    >
                      프로필 수정
                    </NavLink>
                    <NavLink
                      to="/myActivity"
                      className="py-1 px-4 hover:bg-[#D8C3B3]"
                    >
                      내 활동
                    </NavLink>
                    <NavLink
                      to="/bookMark"
                      className="py-1 px-4 hover:bg-[#D8C3B3]"
                    >
                      북마크 일기
                    </NavLink>
                    <NavLink
                      to="/stats"
                      className="py-1 px-4 hover:bg-[#D8C3B3]"
                    >
                      통계목록
                    </NavLink>
                  </div>
                </div>
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
    </div>
  );
};

export default NavBar;
