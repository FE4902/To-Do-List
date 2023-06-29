import { useContext } from "react";
import { TodoContext } from "../App";
import { FaTrashAlt } from "react-icons/fa";

import S from "./TodoItem.module.scss";

type TodoItemType = {
    id: number;
    text: string;
};

const TodoItem = (props: TodoItemType): JSX.Element => {
    const { id, text } = props;
    const { todos, setTodos } = useContext(TodoContext);

    const handleDelete = () => {
        setTodos(todos.filter((v: any) => v.id !== id));
    };

    return (
        <li className={S.item}>
            <div className={S.check}></div>
            <p className={S.text}>{text}</p>
            <button className={S.delete} onClick={handleDelete}>
                <FaTrashAlt />
            </button>
        </li>
    );
};

export default TodoItem;
