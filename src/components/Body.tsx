import { useState } from "react";
import { Item } from "./Item";

export const Body = (): JSX.Element => {
    const [text, setText] = useState();
    let todos = localStorage.getItem("todo") as any;
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
        <main className="body">
            <input
                className="todo__input"
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <ul className="todo__list">
                <Item text="text" />
                {todos}
            </ul>
        </main>
    );
};
