import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <>
      <h1>Welcome, {name}</h1>
      {age > 18 && age < 65 && <Age age={age} />}
    </>
  );
}
