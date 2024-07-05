import halfHappyQuddy from '@assets/halfHappyQuddy.svg';
import Button from '../common/button/Button';
import { useState } from 'react';
import Timer from './timer';
import { useNavigate } from 'react-router-dom';

const SelectModal = ({ sending, setSending }) => {
  const [consolation, setConsolation] = useState(false);
  const [solution, setSolution] = useState(false);

  const navigate = useNavigate();

  const isConsolation = () => {
    setSending(!sending);
    setConsolation(!consolation);
  };

  const isSolution = () => {
    setSending(!sending);
    setSolution(!solution);
  };

  const completeSending = () => {
    navigate('/counseling/completedWriting');
  };

  return (
    <>
      {sending ? (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[900px] h-[600px] rounded-[60px] bg-lightbeige transform scale-75">
            <div className="flex flex-col items-center">
              <div className="font-meetme text-[49px] text-center mt-[60px]">
                쿼디에게 <br /> 어떤 답장을 받고 싶나요?
              </div>
              <img
                className="mt-[20px] w-[290px] h-[218px]"
                src={halfHappyQuddy}
              />
              <div className="flex mt-[31px] gap-[8px]">
                <Button
                  onClick={isConsolation}
                  className="w-[300px] h-[58px] font-semibold text-[22px]"
                >
                  따뜻한 위로의 말
                </Button>

                <Button
                  onClick={isSolution}
                  className="bg-beige w-[300px] h-[58px] font-semibold text-[22px]"
                >
                  따끔한 해결의 말
                </Button>
              </div>
            </div>
          </div>
          ;
        </div>
      ) : consolation || solution ? (
        <div className="z-40 fixed top-0 left-0 w-full h-full bg-stone-600/60">
          <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[900px] h-[600px] rounded-[60px] bg-lightbeige transform scale-75">
            <div className="flex flex-col justify-center items-center">
              <div className="font-meetme text-[78px] text-center mt-[88px]">
                고민 전송 완료 !
              </div>
              <div className="text-[30px] mb-[30px]">
                12시간 뒤에 답장이 와요
              </div>
              <Timer hh={'12'} mm={'00'} ss={'00'} />

              <Button
                onClick={completeSending}
                className="w-[300px] h-[58px] font-semibold text-[27px] mt-[59px]"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default SelectModal;
