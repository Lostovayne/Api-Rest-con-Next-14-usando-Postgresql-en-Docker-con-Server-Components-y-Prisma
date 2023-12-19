"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "..";
import * as api from "@/todos/helpers/todos";

import { useRouter } from "next/navigation";

interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
    const router = useRouter();
    const ToggleTodo = async (id: string, complete: boolean) => {
        await api.UpdateTodo(id, complete);
        router.refresh();
    };

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} toggleTodo={ToggleTodo} />;
            })}
        </div>
    );
};
