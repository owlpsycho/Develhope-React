import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Counter from "./pages/Counter";
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Denis" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
