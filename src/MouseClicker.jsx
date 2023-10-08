import faviconImage from "./assets/favicon-16x16.png";

export const MouseClicker = ({ name }) => {
    const handleClicker = (event) => {
        console.log(event.target.name)
    }

    const handleImgClicker = (event) => {
        console.log(event.target.src);
    }


    return (
        <>
            <button name={name} onClick={handleClicker}><img src={faviconImage} onClick={handleImgClicker}/>Click Me!</button>
        </>
    )
}