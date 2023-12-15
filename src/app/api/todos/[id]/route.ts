import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
    params: {
        id: string;
    };
}

export async function GET(request: Request, segments: Segments) {
    const { id } = segments.params;
    const todo = await prisma.todo.findFirst({ where: { id } });
    if (!todo) {
        return NextResponse.json({ message: `Todo ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(todo);
}
