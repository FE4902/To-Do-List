export const Body = (): JSX.Element => {
    return (
        <main className="body">
            <input className="todo__input" type="text" placeholder="What needs to be done?" />
            <ul className="todo__list"></ul>
        </main>
    );
};
