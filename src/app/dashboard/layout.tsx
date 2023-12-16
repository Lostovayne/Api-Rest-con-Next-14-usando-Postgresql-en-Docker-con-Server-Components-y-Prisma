/* eslint-disable @next/next/no-img-element */
// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import {
    CiBellOn,
    CiBookmarkCheck,
    CiChat1,
    CiLogout,
    CiMenuBurger,
    CiSearch,
} from "react-icons/ci";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        {/* TODO: Next/Link hacia dashboard */}
                        <a href="#" title="home">
                            {/* Next/Image */}
                            <img
                                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                                className="w-32"
                                alt="tailus logo"
                            />
                        </a>
                    </div>

                    <div className="mt-8 text-center">
                        {/* Next/Image */}
                        <img
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
                            alt=""
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                            Cynthia J. Watts
                        </h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {/* TODO: src/components <SidebarItem /> */}
                        {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
                        <li>
                            <a
                                href="#"
                                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                            >
                                <CiBookmarkCheck size={30} />
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                            >
                                <CiBookmarkCheck size={30} />
                                <span className="group-hover:text-gray-700">Categories</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <CiLogout />
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>

            {/*TODO: Fin del <Sidebar /> */}

            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                {/* TODO: src/components <TopMenu /> */}
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
                            Dashboard
                        </h5>
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                            <CiMenuBurger size={30} />
                        </button>
                        <div className="flex space-x-2">
                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                        <CiSearch />
                                    </span>
                                    <input
                                        type="search"
                                        name="leadingIcon"
                                        id="leadingIcon"
                                        placeholder="Search here"
                                        className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                                    />
                                </div>
                            </div>

                            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                <CiSearch />
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <CiChat1 size={25} />
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                <CiBellOn size={25} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* TODO: Fin del <TopMenu /> */}

                {/* TODO: Contenido en el Layout.tsx */}
                <div className="px-6 pt-6">
                    {/* TODO: dashboard/page.tsx  */}
                    {/* Este contenido va dentro de page.tsx */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* TODO: src/components <WidgetItem /> */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                                <div>
                                    <h5 className="text-xl text-gray-600 text-center">
                                        Global Activities
                                    </h5>
                                    <div className="mt-2 flex justify-center gap-4">
                                        <h3 className="text-3xl font-bold text-gray-700">
                                            $23,988
                                        </h3>
                                        <div className="flex items-end gap-1 text-green-500">
                                            <svg
                                                className="w-3"
                                                viewBox="0 0 12 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span>2%</span>
                                        </div>
                                    </div>
                                    <span className="block text-center text-gray-500">
                                        Compared to last week $13,988
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* TODO: Fin <WidgetItem /> */}
                    </div>
                    {/* TODO: fin del dashboard/page.tsx  */}

                    {/* TODO: Fin del contenido en el Layout.tsx */}
                </div>
            </div>
        </>
    );
}
