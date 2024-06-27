import { useState, useEffect } from 'react';

const Timer = ({ hh, mm, ss }) => {
  const [hours, setHours] = useState(parseInt(hh));
  const [minutes, setMinutes] = useState(parseInt(mm));
  const [seconds, setSeconds] = useState(parseInt(ss));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      } else {
        if (parseInt(minutes) > 0) {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        } else {
          if (parseInt(hours) === 0) {
            clearInterval(countdown);
          } else {
            setHours(parseInt(hours) - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [hours, minutes, seconds]);

  return (
    <div className="text-[99px] flex justify-center relative top-[-12px]">
      {hours < 10 ? ` 0${hours}` : hours} :{' '}
      {minutes < 10 ? ` 0${minutes}` : minutes} :{' '}
      {seconds < 10 ? ` 0${seconds}` : seconds}
    </div>
  );
};
export default Timer;
