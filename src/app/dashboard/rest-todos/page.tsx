export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserSessionServer } from "@/app/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Listado de Todos",
    description: "Listado de Todos",
};

export default async function RestTodosPage() {
    const user = await getUserSessionServer();

    if (!user) {
        redirect("/api/auth/signin");
    }

    const orderedTodos = await prisma.todo.findMany({
        where: { userId: user?.id },
        orderBy: { description: "asc" },
    });

    return (
        <div className="h-[calc(100vh-120px)] overflow-hidden ">
            {/* TODO: Agregar un formulario */}
            <div className="w-full  mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={orderedTodos} />
        </div>
    );
}
