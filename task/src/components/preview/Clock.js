import React, { useState, useEffect } from "react";
import "./Clock.css"; // Import the CSS file for styling

const Clock = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours > 0 ? hours + "h " : ""}${
      minutes > 0 ? minutes + "m " : ""
    }${seconds}s`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="time">Time: {formatTime(time)}</div>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button style={{ backgroundColor: "red" }} onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
