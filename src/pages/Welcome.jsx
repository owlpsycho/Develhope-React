import { Link } from "react-router-dom";

const Welcome = ({ name }) => {
  return (
    <>
      <h1>Welcome {name}</h1>
      <Link to="/counter">Counter</Link>
    </>
  );
};

export default Welcome;
