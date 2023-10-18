import faviconImage from "./assets/favicon-16x16.png";

export const MouseClicker = ({ name }) => {
  const handleClicker = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleImgClicker = (event) => {
    console.log(event.currentTarget.src);
  };

  //vengono eseguiti insieme a causa dell'effetto bubble di html dato che l'immagine si trova all'interno del bottone

  return (
    <>
      <button name={name} onClick={handleClicker}>
        <img src={faviconImage} onClick={handleImgClicker} />
        Click Me!
      </button>
    </>
  );
};
