import { useState } from "react";

import S from "./TodoInput.module.scss";

const TodoInput = (todos: any): JSX.Element => {
    const [text, setText] = useState("");
    let parseToDos = JSON.parse(todos) ?? [];

    const handleChange = (e: any) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            if (e.target.value) {
                parseToDos = [...parseToDos, e.target.value];
                localStorage.setItem("todo", JSON.stringify(parseToDos));
            }
            e.target.value = "";
        }
    };

    return (
        <input
            className={S.input}
            type="text"
            placeholder="What needs to be done?"
            value={text}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export default TodoInput;
