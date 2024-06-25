import { useState } from 'react';

const Weather = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const optionClass = (option) => {
    return `flex justify-center items-center  text-[18px]  w-[97px] h-[30px] rounded-[20px] hover:bg-white hover:font-bold ${selectedOption == option ? 'bg-white font-bold' : 'font-normal'} `;
  };
  return (
    <>
      <div className="bg-[#E8DBCF] w-[119px] h-[158px] rounded-[20px] flex flex-col justify-evenly items-center cursor-pointer">
        <div
          onClick={() => handleOptionClick('맑음')}
          className={optionClass('맑음')}
        >
          맑음
        </div>
        <div
          onClick={() => handleOptionClick('구름많음')}
          className={optionClass('구름많음')}
        >
          구름많음
        </div>
        <div
          onClick={() => handleOptionClick('비')}
          className={optionClass('비')}
        >
          비
        </div>
        <div
          onClick={() => handleOptionClick('눈')}
          className={optionClass('눈')}
        >
          눈
        </div>
      </div>
    </>
  );
};
export default Weather;
