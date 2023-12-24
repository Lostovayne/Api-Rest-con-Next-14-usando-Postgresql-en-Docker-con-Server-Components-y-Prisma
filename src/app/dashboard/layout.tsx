import { Sidebar } from "@/components/Sidebar";
import { TopMenu } from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <>
            <Sidebar />
            <div className="ml-auto  lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-white py-4 px-2 rounded-md">
                <TopMenu />
                <div className="px-6 pt-6">{children}</div>
            </div>
        </>
    );
}
