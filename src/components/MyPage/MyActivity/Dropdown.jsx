import { useEffect, useState } from 'react';
import down from '../../../../public/icon/dropdown.svg';
const Dropdown = () => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);
  const [dropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState('2024');
  useEffect(() => {
    if (dropdownView) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 100),
      );
    }
  }, [dropdownView]);

  const handleClickDropdown = () => {
    setDropdownView(!dropdownView);
  };

  const onChangeState = (value) => {
    setInitState(value);
    setDropdownView(false);
  };

  return (
    <div>
      <button
        className="flex gap-[10px] justify-center items-center border-[1px] border-black rounded-[7px] px-[20px] text-[28px] font-medium"
        onClick={handleClickDropdown}
      >
        <span>{initState}</span>
        {dropdownView ? (
          <img src={down} />
        ) : (
          <img src={down} className="transform rotate-180" />
        )}
      </button>
      {visibilityAnimation && (
        <ul className="justify-center items-center border-[1px] border-black rounded-[7px] px-[20px] text-[28px] font-medium ">
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2024')}
          >
            2024
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2025')}
          >
            2025
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2026')}
          >
            2026
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2027')}
          >
            2027
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2028')}
          >
            2028
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2029')}
          >
            2029
          </li>
          <li
            className="hover:text-[#d8b18e] cursor-pointer"
            onClick={() => onChangeState('2030')}
          >
            2030
          </li>
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
