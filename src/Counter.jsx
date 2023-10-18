import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <CounterDisplay value={count} />
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}
