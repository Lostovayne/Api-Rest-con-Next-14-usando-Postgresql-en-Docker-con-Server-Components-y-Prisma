import { Sidebar } from "@/components/Sidebar";
import { TopMenu } from "@/components/TopMenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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
