"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { addTodo, deleteTodos } from "../actions/todo-actions";

export const NewTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (description.trim().length === 0) return;
        await addTodo(description);
        setDescription("");
    };

    const deleteCompleted = async () => {
        deleteTodos();
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full  flex-row justify-between">
            <div className="flex ml-10 flex-1">
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                    placeholder="¿Qué necesita ser hecho?"
                />

                <button
                    type="submit"
                    className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
                >
                    Crear
                </button>
            </div>

            <button
                onClick={() => deleteCompleted()}
                type="button"
                className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
            >
                <IoTrashOutline />
                Borrar Completados
            </button>
        </form>
    );
};
