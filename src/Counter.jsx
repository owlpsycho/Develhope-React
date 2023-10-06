import { useState } from "react"
import { Button } from "./Button"
import { useEffect } from "react"

export function Counter({ startValue, increment}){
    const [count, setCount] = useState(startValue)

    function handleClickPlus (){
        setCount(count + increment)
    }

    function handleClickMinus (){
        setCount(count - increment)
    }

    function handleClickReset (){
        setCount(0)
    }

    useEffect(()=>{
        console.log(count)
    },[count])

    return (
        <>
            <h2>{count}</h2>
            <Button name="Add" event={handleClickPlus}/>
            <Button name="Subtract" event={handleClickMinus}/>
            <Button name="Reset" event={handleClickReset}/>
        </>
    )
}

