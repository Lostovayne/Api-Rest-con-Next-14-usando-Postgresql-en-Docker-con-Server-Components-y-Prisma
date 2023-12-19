import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
    title: "Listado de Todos",
    description: "Listado de Todos",
};

export default async function RestTodosPage() {
    const orderedTodos = await prisma.todo.findMany({
        orderBy: {
            description: "asc",
        },
    });

    return (
        <div className="h-[calc(100vh-115px)] overflow-hidden ">
            {/* TODO: Agregar un formulario */}
            <div className="w-full  mb-5">
                <NewTodo />
            </div>
            <TodosGrid todos={orderedTodos} />
        </div>
    );
}
