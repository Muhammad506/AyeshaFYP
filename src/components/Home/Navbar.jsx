import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-br border-b fixed z-50 w-full border-black from-[#79A3FF] to-[#A8D8F0] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-black text-2xl font-extrabold tracking-widest">
                        <a href="/">Brand</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#home"
                            className="text-black font-medium hover:text-white transition duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-black font-medium hover:text-white transition duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-black font-medium hover:text-white transition duration-300"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-black font-medium hover:text-white transition duration-300"
                        >
                            Contact
                        </a>
                        {/* Login and Register Buttons */}
                        <div className="ml-6 space-x-4">
                            <button className="px-5 py-2 bg-gradient-to-r from-white to-gray-200 text-blue-600 font-semibold rounded-lg shadow hover:from-gray-100 hover:to-white transition duration-300">
                                Login
                            </button>
                            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition duration-300">
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0] shadow-inner">
                    <a
                        href="#home"
                        className="block px-6 py-3 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-6 py-3 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="block px-6 py-3 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="block px-6 py-3 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Contact
                    </a>
                    {/* Login and Register Buttons */}
                    <div className="px-6 py-3 space-y-3">
                        <button className="block w-full px-5 py-2 bg-gradient-to-r from-white to-gray-200 text-blue-600 font-semibold rounded-lg shadow hover:from-gray-100 hover:to-white transition duration-300">
                            Login
                        </button>
                        <button className="block w-full px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition duration-300">
                            Register
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
