import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from '../pages/AuthPage/WelcomePage';
import MainPage from '../pages/MainPage/MainPage';
import WritingPage from '../pages/WritingPage/WritingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Layout from './Layout';
import SearchListPage from '../pages/SearchPage/SearchListPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage';
import CounselingPage from '../pages/CounselingPage/CounselingPage';
import WritingLetterPage from '../pages/CounselingPage/WritingLetterPage';
import CompletedWriting from '../pages/CounselingPage/CompletedWriting';
import QuddyLetter from '../pages/CounselingPage/QuddyLetter';
import AuthPage from '../pages/AuthPage/AuthPage';
import KakaoAuth from '../components/AuthPage/KakaoAuth';

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
          { path: '/counseling', element: <CounselingPage /> },
          { path: '/counseling/writingLetter', element: <WritingLetterPage /> },
          {
            path: '/counseling/completedWriting',
            element: <CompletedWriting />,
          },
          { path: '/letter/:id', element: <QuddyLetter /> },
          { path: '/auth', element: <AuthPage /> },
          { path: '/user', element: <AuthPage /> },
          { path: '/auth', element: <KakaoAuth /> },
        ],
      },
    ])}
  />
);

export default Router;
