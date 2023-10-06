import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    function handleClick (){
        setCount(count + 1)
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}

