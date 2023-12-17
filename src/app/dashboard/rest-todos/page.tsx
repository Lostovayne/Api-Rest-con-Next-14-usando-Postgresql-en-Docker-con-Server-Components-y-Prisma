import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

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
        <div>
            {/* TODO: Agregar un formulario */}
            <TodosGrid todos={orderedTodos} />
        </div>
    );
}
