import { useContext } from "react";
import { TodoContext } from "../App";
import { FaAngleDown } from "react-icons/fa";

import S from "./TodoMenu.module.scss";

const TodoMenu = (): JSX.Element => {
    const { todos, setTodos, sort, setSort } = useContext(TodoContext);

    const handleClear = () => {
        setTodos(todos.filter((v: any) => v.complete === false));
    };

    const handleSort = (e: any) => {
        if (e.currentTarget.textContent) {
            setSort(e.currentTarget.textContent);
        }
    };

    return (
        <div className={S.menu}>
            <div className={S.sort} tabIndex={0}>
                <div className={S.sort__value}>
                    <span>{sort}</span>
                    <FaAngleDown />
                </div>
                <ul className={S.sort__list}>
                    <li className={S.sort__item}>
                        <button className={S.sort__button} onClick={handleSort}>
                            All
                        </button>
                    </li>
                    <li className={S.sort__item}>
                        <button className={S.sort__button} onClick={handleSort}>
                            Active
                        </button>
                    </li>
                    <li className={S.sort__item}>
                        <button className={S.sort__button} onClick={handleSort}>
                            Completed
                        </button>
                    </li>
                </ul>
            </div>
            <button className={S.clear} onClick={handleClear}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoMenu;
