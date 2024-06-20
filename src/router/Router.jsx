import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from '../pages/AuthPage/WelcomePage';
import MainPage from '../pages/MainPage/MainPage';
import Layout from './Layout';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <WelcomePage /> },
          { path: '/home', element: <MainPage /> },
        ],
      },
    ])}
  />
);

export default Router;
