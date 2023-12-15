import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: "Piedra del Alma", complete: true },
            { description: "Piedra del Poder" },
            { description: "Piedra del Tiempo" },
            { description: "Piedra del Espiritu" },
            { description: "Piedra de la Luz" },
            { description: "Piedra del Fuego" },
            { description: "Piedra de la Oscuridad" },
            { description: "Piedra del Viento" },
            { description: "Piedra del Agua" },
            { description: "Piedra del Frio" },
            { description: "Piedra del Humo" },
            { description: "Piedra del Escudo" },
            { description: "Piedra del Poder" },
            { description: "Piedra del Tiempo" },
            { description: "Piedra del Espiritu" },
            { description: "Piedra de la Luz" },
            { description: "Piedra del Fuego" },
            { description: "Piedra de la Oscuridad" },
            { description: "Piedra del Viento" },
        ],
    });

    return NextResponse.json({ message: "seed" });
}
