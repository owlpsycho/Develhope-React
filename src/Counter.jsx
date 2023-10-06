import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    function handleClick (){
        setCount(count + 1)
        // usiamo la funzione dentro setCount se dobbiamo fare più operazioni su count, 
        //sennò utilizziamo un valore immediato se dobbiamo eseguire una semplice operazione
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}

