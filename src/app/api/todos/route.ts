import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const take = Number(searchParams.get("take") ?? "10");
    const skip = Number(searchParams.get("skip") ?? "0");

    if (isNaN(skip)) {
        return NextResponse.json({ message: "Skip invalido debe ser un Numero" }, { status: 400 });
    }

    if (isNaN(take)) {
        return NextResponse.json({ message: "Take invalido debe ser un Numero" }, { status: 400 });
    }

    const todos = await prisma.todo.findMany({
        take,
        skip,
    });

    return NextResponse.json(todos);
}

// Validaciones
const postSchema = object({
    description: string().required("Description is required"),
    complete: boolean().optional().default(false),
});

export async function POST(request: Request) {
    try {
        const { complete, description } = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({ data: { complete, description } });

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
