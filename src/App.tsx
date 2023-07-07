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
    const [sort, setSort] = useState(localStorage.getItem("sort") || "All");
    const [sortTodos, setSortTodos] = useState(todos);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
        localStorage.setItem("sort", todos.length > 0 ? `${sort}` : "All");

        switch (sort) {
            case "All":
                setSortTodos(todos);
                break;
            case "Active":
                setSortTodos(todos.filter((v: any) => v.complete === false));
                break;
            case "Completed":
                setSortTodos(todos.filter((v: any) => v.complete === true));
                break;
        }
    }, [todos, sort]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, sort, setSort }}>
            <div className="wrap">
                <header className="header">
                    <h1 className="title">오늘 할 일</h1>
                    <TodoInput />
                    {todos.length > 0 && <TodoMenu />}
                </header>
                <main className="body">
                    <TodoList sortTodos={sortTodos} />
                </main>
            </div>
        </TodoContext.Provider>
    );
}

export default App;
