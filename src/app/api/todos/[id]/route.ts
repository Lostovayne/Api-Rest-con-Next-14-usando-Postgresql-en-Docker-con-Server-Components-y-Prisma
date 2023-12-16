import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
    params: {
        id: string;
    };
}

const getTodo = (id: string): Promise<Todo | null> => {
    const todo = prisma.todo.findFirst({ where: { id } });
    return todo;
};

export async function GET(request: Request, { params: { id } }: Segments) {
    const todo = await getTodo(id);
    if (!todo) return NextResponse.json({ message: `Todo ${id} not found` }, { status: 404 });
    return NextResponse.json(todo);
}

// Update the todo
const putSchema = object({
    complete: boolean().optional(),
    description: string().optional(),
});

export async function PUT(request: Request, { params: { id } }: Segments) {
    const todo = await getTodo(id);
    if (!todo) return NextResponse.json({ message: `Todo ${id} not found` }, { status: 404 });

    try {
        const { complete, description } = await putSchema.validate(await request.json());
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete, description },
        });

        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json(
            { message: `Properties the id ${id} not found or invalid type ` },
            { status: 400 }
        );
    }
}
