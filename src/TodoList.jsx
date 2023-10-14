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

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddToDo();
        }
    }

    const handleResetItemsArray = () => {
        setToDoList([]);
    }

    const handleRemoveItems = (index) => {
        setToDoList(toDoList.filter((i) => {i !== index}));
    }

    return (
        <div>
            <ul>
                {toDoList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveItems(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={toDoInput} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <button onClick={handleAddToDo}>Add</button>
            <button onClick={handleResetItemsArray}>Reset</button>
        </div>
    );
}

export default TodoList;
