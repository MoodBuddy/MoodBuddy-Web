import close from '../../../public/icon/close.svg';
import Storage from './Storage';
const TemporaryStorage = ({
  isTemporaryStorageModal,
  temporaryStorageModal,
}) => {
  return (
    <>
      {temporaryStorageModal && (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[500px] h-[494px] bg-[#F7F3EF] rounded-[40px] border-[5px] border-black">
            <div className="flex flex-col">
              <div
                className="flex justify-end mt-[28px] mr-[35px] cursor-pointer"
                onClick={isTemporaryStorageModal}
              >
                <img className="w-[15px] h-[15px]" src={close} />
              </div>
              <div className="border-b-[2px] border-black w-[410px] mt-[18px] mx-auto"></div>
              <div className="font-meetme text-[31px] mt-[22px] ml-[37.5px]">
                임시저장한 글
              </div>
              <div className="flex justify-between mx-[35px] mt-[40px]">
                <div className="text-[13.5px]">
                  <span>총</span>
                  <span className="font-bold"> 2</span>
                  <span>개</span>
                </div>
                <div>
                  <button className="bg-[#D8B18E] w-[60px] h-[25px] rounded-[9px] font-light text-[11px] flex justify-center items-center cursor-pointer">
                    편집
                  </button>
                </div>
              </div>
              <div className="w-[470px] mx-auto border-b-[2px] border-[#D9D9D9] mt-[21px]"></div>
              <Storage />
              <Storage />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TemporaryStorage;
