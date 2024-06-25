import TopBar from '../../components/WritingPage/TopBar';
import Diary from '../../components/WritingPage/Diary';
import NavBar from '../../components/common/layout/NavBar';
import styles from '@styles/check.module.css';
import Footer from '../../components/common/layout/Footer';

import { useState } from 'react';

const WritingPage = () => {
  const [imgSrcs, setImgSrcs] = useState([]);
  const [templateOn, setTemplateOn] = useState(false);
  const handleSetImgSrcs = (newImgSrcs) => {
    setImgSrcs(newImgSrcs);
  };

  const handleTemplate = () => {
    setTemplateOn(!templateOn);
  };

  return (
    <>
      <NavBar></NavBar>
      <TopBar
        setImgSrcs={handleSetImgSrcs}
        setTemplateOn={handleTemplate}
      ></TopBar>

      <div className={`flex justify-center ${styles.check} `}>
        <Diary
          imgSrcs={imgSrcs}
          templateOn={templateOn}
          setTemplateOn={handleTemplate}
        ></Diary>
      </div>
      <Footer />
    </>
  );
};
export default WritingPage;
