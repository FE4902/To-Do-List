import { useContext } from "react";
import { TodoContext } from "../App";

import TodoItem from "./TodoItem";

import S from "./TodoList.module.scss";

const TodoList = (): JSX.Element => {
    const { todos } = useContext(TodoContext);

    return (
        <ul className={S.list}>
            {todos.map((v: any) => {
                return <TodoItem key={v.id} id={v.id} text={v.text} />;
            })}
        </ul>
    );
};

export default TodoList;
