import { useContext } from "react";
import { TodoContext } from "../App";

import S from "./TodoMenu.module.scss";

const TodoMenu = (): JSX.Element => {
    const { todos, setTodos } = useContext(TodoContext);

    const handleClear = () => {
        setTodos(todos.filter((v) => v.complete === false));
    };

    return (
        <div className={S.menu}>
            <div className={S.sort}>
                <ul className={S.sort__list}>
                    <li className={S.sort__item}>
                        <button className={S.sort__button}>All</button>
                    </li>
                    <li className={S.sort__item}>
                        <button className={S.sort__button}>Active</button>
                    </li>
                    <li className={S.sort__item}>
                        <button className={S.sort__button}>Completed</button>
                    </li>
                </ul>
            </div>
            {todos.length > 0 && (
                <button className={S.clear} onClick={handleClear}>
                    Clear Completed
                </button>
            )}
        </div>
    );
};

export default TodoMenu;
