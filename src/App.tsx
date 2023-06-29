import { useState, createContext, useEffect } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";

import "./styles/style.scss";

export const TodoContext = createContext<any>([]);

function App() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todo") || "[]")
    );

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            <div className="wrap">
                <header className="header">
                    <h1 className="title">오늘 할 일</h1>
                    <TodoInput />
                </header>
                <main className="body">
                    <TodoList />
                </main>
                <footer className="footer">
                    <TodoMenu />
                </footer>
            </div>
        </TodoContext.Provider>
    );
}

export default App;
