export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import React from "react";

export const metadata = {
    title: "Listado de Todos",
    description: "Listado de Todos",
};

export default async function ServerTodosPage() {
    const orderedTodos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

    return (
        <div className="h-[calc(100vh-115px)] overflow-hidden ">
            <span className=" block text-3xl mb-5 ">Server Actions</span>

            <div className="w-full  mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={orderedTodos} />
        </div>
    );
}
