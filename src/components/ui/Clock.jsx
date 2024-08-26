import React, { useState, useEffect } from 'react';

function Clock() {
  const [timeLeft, setTimeLeft] = useState(609400); 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return { days, hours, minutes, remainingSeconds };
  };

  const { days, hours, minutes, remainingSeconds } = formatTime(timeLeft);

  return (
    <div className='text-center m-4'>
      <div className='d-flex justify-content-between'>
        <div className="day">
          <div className='bg-white text-dark fw-bold'>{days}</div>
          <div>days</div>
        </div>
        :
        <div className="hour">
          <div className='bg-white text-dark fw-bold'>{hours < 10 ? '0' : ''}{hours}</div>
          <div>hours</div>
        </div>
        :
        <div className="minute">
          <div className='bg-white text-dark fw-bold'>{minutes < 10 ? '0' : ''}{minutes}</div>
          <div>minutes</div>
        </div>
        :
        <div className="second">
          <div className='bg-white text-dark fw-bold'>{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</div>
          <div>seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
