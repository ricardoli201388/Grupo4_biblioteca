import React, { useState } from "react";

export default function Cronometro() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  //const[seconds, setSeconds] = useState(0);
  const [customInterval, setcustomInterval] = useState < NodeJS.Timer();

  const startTime = () => {
    setcustomInterval(
      setInterval(() => {
        changeTime();
      }, 60000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };
  const clear = () => {
    stopTimer();
    setMinutes(0);
    setHour(0);
  };

  const changeTime = () => {
    setMinutes((prevState) => {
      if (prevState + 1 == 60) {
        setHour(hour + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <Text>
      {hour < 10 ? "0" + hour : hour}
      {minutes < 10 ? "0" + minutes : minutes}
    </Text>
  );
}
