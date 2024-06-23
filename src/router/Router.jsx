import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from '../pages/AuthPage/WelcomePage';
import MainPage from '../pages/MainPage/MainPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Layout from './Layout';
import SearchListPage from '../pages/SearchPage/SearchListPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <WelcomePage /> },
          { path: '/home', element: <MainPage /> },
          { path: '/search', element: <SearchPage /> },
          { path: '/searchlist', element: <SearchListPage /> },
        ],
      },
    ])}
  />
);

export default Router;
