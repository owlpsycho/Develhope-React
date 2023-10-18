export const MouseClicker = ({ name }) => {
  const handleClicker = (event) => {
    console.log(event.target.name);
  };

  return (
    <>
      <button name={name} onClick={handleClicker}>
        Click Me!
      </button>
    </>
  );
};
