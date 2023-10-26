import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Counter } from "./pages/Counter";
import { ShowGithubUser } from "./pages/ShowGithubUser"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Denis" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
};

export default App;
