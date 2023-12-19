import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: "Piedra del Alma", complete: true },
            { description: "Piedra del Poder" },
            { description: "Piedra del Tiempo" },
        ],
    });

    return NextResponse.json({ message: "seed" });
}
