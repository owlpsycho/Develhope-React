import { Age } from "./Age";
export function Welcome({ name }) {
  return (
    <>
      {name === "John" && <p>Welcome,{name}</p>}
      <Age age={66} />
    </>
  );
}
