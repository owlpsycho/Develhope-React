import faviconImage from "./assets/favicon-16x16.png";

export const MouseClicker = ({ name }) => {
  const handleClicker = (event) => {
    console.log(event.currentTarget.name);
  };

  return (
    <>
      <button name={name} onClick={handleClicker}>
        <img src={faviconImage} /> Click Me!
      </button>
    </>
  );
};
