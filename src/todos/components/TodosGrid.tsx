import { Todo } from "@prisma/client";
import { TodoItem } from "..";

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
            })}
        </div>
    );
};
