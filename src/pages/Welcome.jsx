import { Link } from "react-router-dom";

export const Welcome = ({ name }) => {
  return (
    <>
      <h1>Welcome {name}</h1>
      <Link to="/counter">Counter</Link> | <Link to="users/owlpsycho">Profilo Github</Link>
    </>
  );
};