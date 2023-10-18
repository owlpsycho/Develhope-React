import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <h1>Welcome, {name}</h1>
      {age > 18 ? <Age age={age} /> : <p>You are very young</p>} 
    </>
  );
}
