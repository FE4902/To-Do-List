import { useState, useContext } from "react";
import { TodoContext } from "../App";

import S from "./TodoInput.module.scss";

const TodoInput = (): JSX.Element => {
    const [text, setText] = useState("");
    const { todos, setTodos } = useContext(TodoContext);

    const handleChange = (e: any) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

            if (e.target.value) {
                setTodos([...todos, { id: id, text: text, complete: false }]);
            }
            setText("");
        }
    };

    return (
        <input
            className={S.input}
            type="text"
            placeholder="오늘 해야 할 일은?"
            value={text}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export default TodoInput;
