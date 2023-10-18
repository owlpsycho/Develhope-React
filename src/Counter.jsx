import { useEffect, useRef, useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const prevRef = useRef(initialValue);
  const currentRef = useRef("same");

  useEffect(() => {
    let newDirection;
    if (count > prevRef.current) {
      newDirection = "up";
    } else if (count < prevRef.current) {
      newDirection = "down";
    } else {
      newDirection = "same";
    }

    if (newDirection !== currentRef.current) {
      currentRef.current = newDirection;
      console.log(currentRef.current);
    }

    prevRef.current = count;
  }, [count]);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleRemove() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
