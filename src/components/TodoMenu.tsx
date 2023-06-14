const TodoMenu = (): JSX.Element => {
    return (
        <>
            <div className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <button className="menu__link">All</button>
                    </li>
                    <li className="menu__item">
                        <button className="menu__link">Active</button>
                    </li>
                    <li className="menu__item">
                        <button className="menu__link">Completed</button>
                    </li>
                </ul>
            </div>
            <div className="clear">
                <button className="clear__button">Clear Completed</button>
            </div>
        </>
    );
};

export default TodoMenu;
