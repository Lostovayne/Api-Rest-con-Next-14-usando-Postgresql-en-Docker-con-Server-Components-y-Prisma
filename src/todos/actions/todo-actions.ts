"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

// export const sleep = async (seconds = 0) => {
//     return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    // await sleep(3);
    const todo = await prisma.todo.findFirst({ where: { id } });
    if (!todo) throw new Error(`Todo ${id} not found`);

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete },
    });

    revalidatePath("/dashboard/server-actions");
    return updatedTodo;
};

export const addTodo = async (description: string, userId: string) => {
    try {
        const todo = await prisma.todo.create({ data: { description, userId } });
        revalidatePath("/dashboard/server-actions");
        return todo;
    } catch (error) {
        return {
            error: "Error creating todo",
        };
    }
};

export const deleteTodos = async (): Promise<void> => {
    await prisma.todo.deleteMany({
        where: { complete: true },
    });
    revalidatePath("/dashboard/server-actions");
};
