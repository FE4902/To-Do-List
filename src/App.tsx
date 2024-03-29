import { useState, createContext, useEffect } from "react";

import { TodoType } from "./types/types";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";

import "./styles/style.scss";

export const TodoContext = createContext<any>([]);

function App() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todo") || "[]")
    );
    const [sort, setSort] = useState<string>(
        localStorage.getItem("sort") || "All"
    );
    const [sortTodos, setSortTodos] = useState<TodoType[]>(todos);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
        localStorage.setItem("sort", todos.length > 0 ? `${sort}` : "All");

        switch (sort) {
            case "All":
                setSortTodos(todos);
                break;
            case "Active":
                setSortTodos(
                    todos.filter((v: TodoType) => v.complete === false)
                );
                break;
            case "Completed":
                setSortTodos(
                    todos.filter((v: TodoType) => v.complete === true)
                );
                break;
        }
    }, [todos, sort]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, sort, setSort }}>
            <div className="wrap">
                <div className="container">
                    <header className="header">
                        <h1 className="title">오늘 할 일</h1>
                        <TodoInput />
                        {todos.length > 0 && <TodoMenu />}
                    </header>
                    <main className="body">
                        <TodoList sortTodos={sortTodos} />
                    </main>
                </div>
            </div>
        </TodoContext.Provider>
    );
}

export default App;
