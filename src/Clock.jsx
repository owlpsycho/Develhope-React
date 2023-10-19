import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState("");

  function currentTime() {
    const time = new Date().toLocaleTimeString();
    return time;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>Sono le</h1>
      <h1>{time}</h1>
    </>
  );
};
