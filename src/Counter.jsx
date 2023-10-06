import { useState } from "react"

export function Counter({ startValue, increment}){
    const [count, setCount] = useState(startValue)
    function handleClick (){
        setCount(count + increment)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}

