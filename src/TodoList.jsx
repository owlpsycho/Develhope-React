import React, { useState } from "react";

const TodoList = ({ items }) => {
    const [toDoInput, setToDoInput] = useState("");
    const [toDoList, setToDoList] = useState(items);

    const handleInputChange = (event) => {
        setToDoInput(event.target.value);
    }

    const handleAddToDo = () => {
        setToDoList([
            ...toDoList, 
            toDoInput
        ]);
        setToDoInput("");
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleAddToDo();
        }
    }

    return (
        <>
            <ul>
                {toDoList.map((item) => <li>{item}</li>)}
            </ul>
            <input type="text" value={toDoInput} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <button onClick={handleAddToDo}>Add</button>
        </>
    );
}

export default TodoList;
