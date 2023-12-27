import { getUserSessionServer } from "@/app/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
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
    const user = await getUserSessionServer();
    console.log(user);

    if (!user) {
        return NextResponse.json({ message: "User not autorizated" }, { status: 401 });
    }

    try {
        const { complete, description } = await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({ data: { complete, description, userId: user.id } });

        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    const user = await getUserSessionServer();

    try {
        await prisma.todo.deleteMany({
            where: {
                complete: true,
                userId: user!.id,
            },
        });

        return NextResponse.json({ message: "Todos completados Eliminados" });
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
