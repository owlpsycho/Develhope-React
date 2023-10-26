import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Counter } from "./pages/Counter";
import { ShowGithubUser } from "./pages/ShowGithubUser";
import { NotFound } from "./pages/NotFound";
import "./App.css";

const App = () => {
  
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/owlpsycho">Profilo Github</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Denis" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
