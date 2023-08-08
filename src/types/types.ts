export type TodoType = {
    id: number;
    text: string;
    complete: boolean;
};

export type TodoListProps = {
    sortTodos: TodoType[];
};
