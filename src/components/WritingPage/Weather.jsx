import useweatherStore from '../../store/weatherStore';

const Weather = () => {
  const { selectedOption, setSelectedOption } = useweatherStore();

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
          onClick={() => handleOptionClick('CLEAR')}
          className={optionClass('CLEAR')}
        >
          맑음
        </div>
        <div
          onClick={() => handleOptionClick('CLOUDY')}
          className={optionClass('CLOUDY')}
        >
          구름많음
        </div>
        <div
          onClick={() => handleOptionClick('RAIN')}
          className={optionClass('RAIN')}
        >
          비
        </div>
        <div
          onClick={() => handleOptionClick('SNOW')}
          className={optionClass('SNOW')}
        >
          눈
        </div>
      </div>
    </>
  );
};
export default Weather;
