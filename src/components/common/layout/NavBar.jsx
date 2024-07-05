import { Link, NavLink } from 'react-router-dom';
import { MenuList } from '../../../constants/MenuList';

const NavBar = () => {
  const isLogin = !!localStorage.getItem('token');

  return (
    <div>
      <div className="flex top-0 z-10 bg-[#E8DBCF] h-[84px] justify-around transform scale-75">
        <div className="flex items-center text-2xl mr-12 ">
          <h1 className="font-meetme">MOODBUDDY</h1>
        </div>

        <div className="flex items-center gap-32 text-[22px] font-semibold">
          {MenuList.map((item) => (
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
