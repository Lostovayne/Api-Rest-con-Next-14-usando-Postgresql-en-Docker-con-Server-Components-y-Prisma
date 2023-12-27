"use client";
import { cn } from "@/helpers/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmarkCheck } from "react-icons/ci";
import { MenuProps } from "./Sidebar";

const SidebarItem = ({ icon, path, title }: MenuProps) => {
    const pathName = usePathname();

    return (
        <li>
            <Link
                href={path!}
                className={cn(
                    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group ",
                    pathName === path
                        ? "text-slate-50 bg-gradient-to-r from-sky-600 to-cyan-400"
                        : ""
                )}
            >
                {icon}
                <span className="group-hover:text-gray-700">{title}</span>
            </Link>
        </li>
    );
};

export default SidebarItem;
