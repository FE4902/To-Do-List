export const Item = (props: any): JSX.Element => {
    const { text } = props;

    return (
        <li className="todo__item">
            <div className="todo__check"></div>
            <p className="todo__text">{text}</p>
            <div className="todo__delete"></div>
        </li>
    );
};
