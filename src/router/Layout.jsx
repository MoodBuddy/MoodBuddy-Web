import { Outlet } from 'react-router-dom';
import NavBar from '../components/common/layout/NavBar';

const Layout = () => {
  return (
    <>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
