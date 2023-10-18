import { useState } from "react";
import { useEffect } from "react";
import "./Clock.scss";

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

  return <h2>{time}</h2>;
};
