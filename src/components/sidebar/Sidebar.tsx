import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import {
    IoCalendarOutline,
    IoCartOutline,
    IoCheckboxOutline,
    IoCodeWorking,
    IoListOutline,
    IoPersonAddOutline,
} from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { LogoutButton } from "./LogoutButton";

export interface MenuProps {
    icon?: React.ReactNode;
    path: string;
    title: string;
}

const menuItem: MenuProps[] = [
    {
        icon: <IoCalendarOutline size={18} />,
        title: "Dashboard",
        path: "/dashboard",
    },
    {
        icon: <IoCheckboxOutline size={18} />,
        title: "Rest Todos",
        path: "/dashboard/rest-todos",
    },
    {
        icon: <IoListOutline size={18} />,
        title: "Server Actions",
        path: "/dashboard/server-actions",
    },
    {
        icon: <IoCodeWorking size={18} />,
        title: "Cookies",
        path: "/dashboard/cookies",
    },
    {
        icon: <IoCartOutline size={18} />,
        title: "Productos",
        path: "/dashboard/products",
    },
    {
        icon: <IoPersonAddOutline size={18} />,
        title: "Perfil",
        path: "/dashboard/profile",
    },
];

export const Sidebar = async () => {
    const session = await getServerSession(authOptions);

    const userName = session?.user?.name ?? "No Name";
    const userRoles = session?.user?.roles ?? ["Client"];

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="#" title="home">
                        <Image
                            src="https://camlu.cl/cdn/shop/files/logo_camlu_2018-01_255x.png"
                            className="w-40 object-cover"
                            alt="tailus logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image
                        src={
                            session?.user?.image ??
                            "https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
                        }
                        alt=""
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        width={100}
                        height={100}
                        priority
                    />

                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                        {userName}
                    </h5>
                    <span className="hidden text-gray-400 lg:block capitalize">
                        {userRoles.join(", ")}
                    </span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {menuItem.map((item) => {
                        return <SidebarItem key={item.path} {...item} />;
                    })}
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogoutButton />
            </div>
        </aside>
    );
};
