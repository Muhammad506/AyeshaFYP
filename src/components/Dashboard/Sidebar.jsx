import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";



const Sidebar = () => {
    return (
        <>
            <div className="min-h-screen px-3">

                {/* Logo Section */}
                <div className="flex items-center justify-center h-20 bg-gradient-to-r from-[#0066CC] to-[#6699FF] rounded-lg mb-6 shadow-lg">
                    <h1 className="text-2xl font-extrabold tracking-wide">LOGO</h1>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto">
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/dashboard"
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-4 p-2 rounded-lg hover:bg-[#4C8CFF] transition-all duration-300 transform  ${isActive ? "bg-[#4C8CFF] shadow-lg" : "hover:bg-opacity-70"
                                    }`
                                }
                            >
                                <FaHome className="text-xl" />
                                <span className="text-lg font-semibold">Home</span>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                to="/dashboard/exam-management"
                                className={({ isActive }) =>
                                    `flex items-center gap-4 p-2 rounded-lg hover:bg-[#4C8CFF] transition-all duration-300 transform  ${isActive ? "bg-[#4C8CFF] shadow-lg" : "hover:bg-opacity-70"
                                    }`
                                }
                            >
                                <SlBookOpen className="text-xl" />
                                <span className="text-lg font-semibold">Exam Management</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/settings"
                                className={({ isActive }) =>
                                    `flex items-center gap-4 p-2 rounded-lg hover:bg-[#4C8CFF] transition-all duration-300 transform  ${isActive ? "bg-[#4C8CFF] shadow-lg" : "hover:bg-opacity-70"
                                    }`
                                }
                            >
                                <RiLogoutCircleLine className="text-xl" />
                                <span className="text-lg font-semibold">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
};

export default Sidebar;
