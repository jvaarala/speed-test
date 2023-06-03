import React, { useEffect, useState } from 'react';
import Circle from './Circle';

function SpeedTest() {
  const [visible, setVisible] = useState(true);
  const [stopped, setStopped] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (!stopped) {
      setTimeout(() => {
        setVisible(true);
        const now = performance.now();
        setStartTime(now);
        setEndTime(now);
      }, Math.floor(Math.random() * 3000) + 1000);
    }
  }, [stopped]);

  const onClick = () => {
    if (stopped) {
      setVisible(false);
      setStopped(false);
    } else {
      setEndTime(performance.now());
      setStopped(true);
    }
  };

  return (
    <div className="Speedtest">
      {visible && (
      <Circle
        color="red"
        radius={100}
        text={(endTime - startTime) === 0 ? 'Click to start!' : `${Math.round(endTime - startTime)}ms`}
        showText={stopped}
        onClick={onClick}
      />
      )}
    </div>
  );
}

export default SpeedTest;
