export const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="count">1 item left</div>
            <div className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            All
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Active
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Completed
                        </a>
                    </li>
                </ul>
            </div>
            <div className="clear">
                <button className="clear__button">Clear Completed</button>
            </div>
        </footer>
    );
};
