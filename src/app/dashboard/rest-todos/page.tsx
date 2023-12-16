import prisma from "@/lib/prisma";

export const metadata = {
    title: "Listado de Todos",
    description: "Listado de Todos",
};

export default async function RestTodosPage() {
    const todos = await prisma.todo.findMany({
        orderBy: {
            description: "asc",
        },
    });

    return (
        <div>
            <h1>Rest Todos</h1>
            {JSON.stringify(todos)}
        </div>
    );
}
