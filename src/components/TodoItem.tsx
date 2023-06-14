import S from "./TodoItem.module.scss";

type TodoItemType = {
    text: string;
};

const TodoItem = (props: TodoItemType): JSX.Element => {
    const { text } = props;

    return (
        <li className={S.item}>
            <div className="todo__check"></div>
            <p className={S.text}>{text}</p>
            <div className="todo__delete"></div>
        </li>
    );
};

export default TodoItem;
