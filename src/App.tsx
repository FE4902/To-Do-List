import "./styles/style.scss";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoMenu from "./components/TodoMenu";

function App() {
    let todos = localStorage.getItem("todo") as any;

    return (
        <div className="wrap">
            <header className="header">
                <h1>ToDos</h1>
                <TodoInput todos={todos} />
            </header>
            <main className="body">
                <TodoList />
            </main>
            <footer className="footer">
                <TodoMenu />
            </footer>
        </div>
    );
}

export default App;
