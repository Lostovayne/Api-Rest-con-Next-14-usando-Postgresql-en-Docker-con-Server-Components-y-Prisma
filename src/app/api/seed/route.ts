import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            name: "admin",
            email: "admin@localhost",
            password: bcrypt.hashSync("admin"),
            roles: ["admin"],
            isActive: true,
            todos: {
                create: [
                    { description: "Piedra del Alma", complete: true },
                    { description: "Piedra del Poder" },
                    { description: "Piedra del Tiempo" },
                ],
            },
        },
    });

    return NextResponse.json({ message: "seed", user });
}
