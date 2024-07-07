import { Link, NavLink } from 'react-router-dom';
import { MenuList } from '../../../constants/MenuList';
import { useState } from 'react';

const NavBar = () => {
  const isLogin = !!localStorage.getItem('token');
  const [hoveredMyPage, setHoveredMyPage] = useState(false);
  const handleMouseEnter = () => {
    setHoveredMyPage(true);
  };
  const handleMouseLeave = () => {
    setHoveredMyPage(false);
  };
  return (
    <div>
      <div className="flex top-0 z-20 bg-[#E8DBCF] h-[84px] justify-around transform scale-75">
        <div className="flex items-center text-2xl mr-12 ">
          <h1 className="font-meetme">MOODBUDDY</h1>
        </div>

        <div className="flex items-center gap-32 text-[22px] font-semibold">
          {MenuList.map((item) => (
            <div
              key={item.id}
              onMouseEnter={item.id === 5 ? handleMouseEnter : undefined}
              className="relative"
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
                <div className="absolute top-[73px] left-[-25px] w-max bg-[#E8DBCF] border border-[#B98D6D]">
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
        {isLogin ? (
          <div className="flex items-center gap-2 ml-12">
            <Link>
              <div className="w-10 h-10 border rounded-full bg-slate-200"></div>
            </Link>
            <h1 className="text-[22px] font-medium">성나영</h1>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="border-b-[1px] border-[#B98D6D]"> </div>
    </div>
  );
};

export default NavBar;
