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
import KakaoLoginAuth from '../components/AuthPage/KakaoLoginAuth';
import CompletePage from '../pages/AuthPage/CompletePage';
import StatsPage from '../pages/MyPage/StatsPage';
import QuddyTiPage from '../pages/MyPage/QuddyTiPage';
import EditProfilePage from '../pages/MyPage/EditProfilePage';
import MyActivityPage from '../pages/MyPage/MyActivityPage';
import BookMarkPage from '../pages/MyPage/BookMarkPage';
import NoWritingLetterPage from '../pages/CounselingPage/NoWritingLetterPage';
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
          { path: '/search/searchlist', element: <SearchListPage /> },
          { path: '/diary/:id', element: <DiaryPage /> },
          { path: '/counseling', element: <CounselingPage /> },
          { path: '/counseling/writingLetter', element: <WritingLetterPage /> },
          {
            path: '/counseling/noWritingLetter',
            element: <NoWritingLetterPage />,
          },

          {
            path: '/counseling/completedWriting',
            element: <CompletedWriting />,
          },

          { path: 'counseling/letter/:id', element: <QuddyLetter /> },
          { path: '/user', element: <AuthPage /> },
          {
            path: '/api/v1/user/login/oauth2/code/kakao',
            element: <KakaoLoginAuth />,
          },
          { path: '/complete', element: <CompletePage /> },

          { path: '/mypage/stats', element: <StatsPage /> },
          { path: '/mypage/quddyti', element: <QuddyTiPage /> },
          { path: '/mypage/editProfile', element: <EditProfilePage /> },
          { path: '/mypage/myActivity', element: <MyActivityPage /> },

          { path: '/mypage/bookMark', element: <BookMarkPage /> },
        ],
      },
    ])}
  />
);

export default Router;
