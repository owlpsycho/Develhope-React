export const MouseClicker = ({ name }) => {
    const handleClicker = (event) => {
        console.log(event.currentTarget.name)
    }

    const handleImgClicker = (event) => {
        console.log(event.currentTarget.src);
        event.stopPropagation();
    }


    return (
        <>
            <button name={name} onClick={handleClicker}><img src="./assets/react.svg" onClick={handleImgClicker}/>Click Me!</button>
        </>
    )
}