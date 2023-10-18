import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <>
      <h1>Welcome, {name}</h1>
      <Age age={21} />
    </>
  );
}
