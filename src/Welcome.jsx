import { Age } from "./Age";
export function Welcome({ name }) {
  return (
    <>
      {name === "John" && <h1>Welcome,{name}</h1>}
      <Age age={64} />
    </>
  );
}
