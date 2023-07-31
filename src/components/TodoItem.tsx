import cns from "classnames";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

import { useContext } from "react";
import { TodoContext } from "../App";

import S from "./TodoItem.module.scss";

type TodoType = {
    id: number;
    text: string;
    complete: boolean;
};

const TodoItem = (props: TodoType): JSX.Element => {
    const { id, text, complete } = props;
    const { todos, setTodos } = useContext(TodoContext);

    const handleCheck = () => {
        setTodos(
            todos.map((v: TodoType) =>
                v.id === id ? { ...v, complete: !complete } : v
            )
        );
    };

    const handleDelete = () => {
        setTodos(todos.filter((v: TodoType) => v.id !== id));
    };

    return (
        <li className={cns(S.item, complete && S.active)}>
            <button className={S.check} onClick={handleCheck}>
                <FaCheck />
            </button>
            <p className={S.text}>{text}</p>
            <button className={S.delete} onClick={handleDelete}>
                <FaTrashAlt />
            </button>
        </li>
    );
};

export default TodoItem;
