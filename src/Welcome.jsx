import { Age } from "./Age"

export function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <Age age={age}/>
    </div>
  );
}
