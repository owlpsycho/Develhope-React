import { Age } from "./Age";
import "./App.css";
import { Welcome } from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Denis" />
      <Age age={66} />
    </>
  );
}

export default App;
