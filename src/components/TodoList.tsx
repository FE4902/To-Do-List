import TodoItem from "./TodoItem";

import S from "./TodoList.module.scss";

const TodoList = ({ sortTodos }: any): JSX.Element => {
    return (
        <ul className={S.list}>
            {sortTodos.map((v: any) => {
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
