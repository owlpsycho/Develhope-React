import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <h1>Welcome, {name}</h1>
      {age && <Age age={age} />}
    </>
  );
}
