export const MouseClicker = ({ name }) => {
    const handleClicker = (event) => {
        console.log(event.target.name)
    }

    const handleImgClicker = (event) => {
        console.log(event.target.src);
    }


    return (
        <>
            <button name={name} onClick={handleClicker}><img src="./assets/react.svg" onClick={handleImgClicker}/>Click Me!</button>
        </>
    )
}