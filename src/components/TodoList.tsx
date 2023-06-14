import TodoItem from "./TodoItem";

import S from "./TodoList.module.scss";

const TodoList = (): JSX.Element => {
    return (
        <ul className={S.list}>
            <TodoItem text="text" />
            {/* {todos} */}
        </ul>
    );
};

export default TodoList;
