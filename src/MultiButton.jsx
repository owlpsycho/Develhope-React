export const MultiButton = ({btn1, btn2, btn3}) => {
    const handleClicker = (event) => {
        console.log(event.target.name)
    }

    return (
        <>
            <button name={btn1} onClick={handleClicker}>{btn1}</button>
            <button name={btn2} onClick={handleClicker}>{btn2}</button>
            <button name={btn3} onClick={handleClicker}>{btn3}</button>
        </>
    )
}