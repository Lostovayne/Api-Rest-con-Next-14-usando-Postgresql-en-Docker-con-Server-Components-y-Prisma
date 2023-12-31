"use client";

import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Profile Page</h1>
            <div className="flex flex-col">
                <span>{session?.user?.name ?? "No name"} </span>
                <span>{session?.user?.email ?? "No email"}</span>
                <span>{session?.user?.image ?? "No image"}</span>
                <span>{session?.user?.roles?.join(",") ?? "No roles"}</span>
                <span>{session?.user?.id ?? "No id"}</span>
            </div>
        </div>
    );
};

export default ProfilePage;
