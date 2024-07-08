import img from '@assets/img.svg';
import save from '../../../public/icon/save.svg';
import temporaryStorage from '@assets/temporaryStorage.svg';
import showTemplate from '@assets/showTemplate.svg';
import { useRef, useState } from 'react';
import TemporaryStorage from './TemporaryStorage.jsx';
import GotoAnalysis from './GotoAnalysis.jsx';
const TopBar = ({ setImgSrcs, setTemplateOn }) => {
  const [temporaryStorageModal, setTemporaryStorageModal] = useState(false);
  const [gotoAnalysisEmotionModal, setGotoAnalysisEmotionModal] =
    useState(false);

  const fileInputRef = useRef(null);

  const ImgButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    const newImageSrcs = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        newImageSrcs.push(e.target.result);
        if (newImageSrcs.length == files.length) {
          setImgSrcs(newImageSrcs);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isTemporaryStorageModal = () => {
    setTemporaryStorageModal(!temporaryStorageModal);
  };

  const isGotoAnalysisEmotionModal = () => {
    setGotoAnalysisEmotionModal(!gotoAnalysisEmotionModal);
  };

  return (
    <>
      <div className="sticky top-0 z-30 bg-[#EEE4DB] w-[full] h-[117px] shadow-md flex justify-center text-[15px] ">
        <div className="flex flex-row justify-between items-center w-[1438px]">
          <button
            type="button"
            onClick={ImgButtonClick}
            className="transform scale-75 bg-btnColor hover:bg-btnColorActive border-[#98928C] border w-[103px] h-[116px] rounded-[14px] ml-[203px] flex flex-col justify-center items-center gap-[13.5px] cursor-pointer"
          >
            <img src={img}></img>
            <p>사진</p>
          </button>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="immage/*"
            multiple
          />
          <div className="flex flex-row gap-[20px] mr-[30px] transform scale-75">
            <button
              onClick={isTemporaryStorageModal}
              className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-row items-center justify-center"
            >
              <div className="flex flex-col items-center gap-[13.5px] ">
                <img src={temporaryStorage} className="w-[35px] h-[35px]"></img>
                <p>임시저장</p>
              </div>
              <div className="border-l-[1.5px] border-[#b3b3b3] rounded-md  h-16 mx-4"></div>
              <div className=" font-medium text-[25px] ml-[10px]">2</div>
            </button>

            <button
              onClick={isGotoAnalysisEmotionModal}
              className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col justify-center items-center gap-[13.5px]"
            >
              <img src={save}></img>
              <p>저장하기</p>
            </button>
            <button
              onClick={setTemplateOn}
              className="cursor-pointer bg-btnColor hover:bg-btnColorActive  border-[#98928C] border w-[180px] h-[116px] rounded-[12px] flex flex-col items-center justify-center gap-[13.5px]"
            >
              <img src={showTemplate}></img>
              <p>템플릿보기</p>
            </button>
          </div>
        </div>
      </div>
      <TemporaryStorage
        isTemporaryStorageModal={isTemporaryStorageModal}
        temporaryStorageModal={temporaryStorageModal}
      />
      <GotoAnalysis gotoAnalysisEmotionModal={gotoAnalysisEmotionModal} />
    </>
  );
};

export default TopBar;
