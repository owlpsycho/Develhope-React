import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Counter } from "./pages/Counter";
import { ShowGithubUser } from "./pages/ShowGithubUser";
import { GithubUserList } from "./pages/GithubUserList";
import { NotFound } from "./pages/NotFound";
import "./App.css";

const App = () => {
  
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Ricerca Profili Github</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Denis" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
          <Route index element={<p>Add a user and select it</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
