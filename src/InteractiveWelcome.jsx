import { useState } from "react";
import { Welcome } from "../src/Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleChangeInput(event) {
    setName(event.target.value);
  }

  return (
    <>
      <form>
        <input onChange={handleChangeInput} value={name} />
      </form>
      <Welcome name={name} />
    </>
  );
}
