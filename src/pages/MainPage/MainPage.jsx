import Footer from '../../components/common/layout/Footer';
import NavBar from '../../components/common/layout/NavBar';
import AnalysisSection from '../../components/MainPage/AnalysisSection';
import CalendarSection from '../../components/MainPage/CalendarSection';
import IntroduceSection from '../../components/MainPage/IntroduceSection';

const MainPage = () => {
  return (
    <>
      <NavBar />

      <IntroduceSection />
      <AnalysisSection />
      <CalendarSection />

      <Footer />
    </>
  );
};

export default MainPage;
