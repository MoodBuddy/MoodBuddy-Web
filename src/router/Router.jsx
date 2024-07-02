import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from '../pages/AuthPage/WelcomePage';
import MainPage from '../pages/MainPage/MainPage';
import WritingPage from '../pages/WritingPage/WritingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Layout from './Layout';
import SearchListPage from '../pages/SearchPage/SearchListPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import CompletePage from '../pages/AuthPage/CompletePage';
import StatsPage from '../pages/MyPage/StatsPage';
import QuddyTiPage from '../pages/MyPage/QuddyTiPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <WelcomePage /> },
          { path: '/home', element: <MainPage /> },
          { path: '/writing', element: <WritingPage /> },
          { path: '/search', element: <SearchPage /> },
          { path: '/searchlist', element: <SearchListPage /> },
          { path: '/diary/:id', element: <DiaryPage /> },
          { path: '/auth', element: <AuthPage /> },
          { path: '/complete', element: <CompletePage /> },
          { path: '/stats', element: <StatsPage /> },
          { path: '/quddyti', element: <QuddyTiPage /> },
        ],
      },
    ])}
  />
);

export default Router;
