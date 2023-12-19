"use client";
import { Todo } from "@prisma/client";

export const UpdateTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const todo = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({ complete }),
    }).then((res) => res.json());
    console.log(todo);
    return todo;
};

export const CreateTodo = async (description: string): Promise<Todo> => {
    const todo = await fetch(`/api/todos`, {
        method: "POST",
        body: JSON.stringify({ description }),
    }).then((res) => res.json());
    console.log(todo);
    return todo;
};

export const DeleteTodo = async () => {
    return await fetch(`/api/todos`, {
        method: "DELETE",
    }).then((res) => res.json());
};
