import { useState } from "react"
import { Button } from "./Button"

export function Counter({ startValue, increment}){
    const [count, setCount] = useState(startValue)
    function handleClick (){
        setCount(count + increment)
    }

    return (
        <>
            <h2>{count}</h2>
            <Button name="Add" event={}/>
            <Button name="Subtract" event={}/>
            <Button name="Reset" event={}/>
        </>
    )
}

