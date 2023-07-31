import TodoItem from "./TodoItem";

import S from "./TodoList.module.scss";

type TodoType = {
    id: number;
    text: string;
    complete: boolean;
};

type TodoListProps = {
    sortTodos: TodoType[];
};

const TodoList = ({ sortTodos }: TodoListProps): JSX.Element => {
    return (
        <ul className={S.list}>
            {sortTodos.map((v: TodoType) => {
                return (
                    <TodoItem
                        key={v.id}
                        id={v.id}
                        text={v.text}
                        complete={v.complete}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
