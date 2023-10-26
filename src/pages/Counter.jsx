import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <div>
        <p>Contatore: {count}</p>
        <button onClick={increment}>Aumenta</button>
        <button onClick={decrement}>Diminuisci</button>
        <button onClick={reset}>Resetta</button>
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Counter;
