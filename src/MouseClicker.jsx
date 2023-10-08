export const MouseClicker = ({ name }) => {
    const handleClicker = (event) => {
        console.log(event.currentTarget.name)
    }



    return (
        <>
            <button name={name} onClick={handleClicker}><img src="./assets/react.svg"/> Click Me!</button>
        </>
    )
}