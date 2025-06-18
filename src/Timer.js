import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);

  return (
    <div className="timer-container">
      <h1 className="timer-display">
        {seconds > 0 ? `${seconds} seconds` : "Time’s up!"}
      </h1>
      <div className="button-group">
        <button onClick={handleStart} disabled={isActive || seconds === 0}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          Pause
        </button>
        <button onClick={() => { setSeconds(60); setIsActive(false); }}>
  Reset
</button>

      </div>
    </div>
  );
};

export default Timer;
