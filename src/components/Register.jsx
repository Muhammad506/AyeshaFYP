const Register = () => {
    return (
        <main className="flex flex-col lg:flex-row font-inter  bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0]">
            {/* Left Section - Image */}
            <div className="w-full lg:w-[60%] bg-cover bg-center max-h-screen relative rounded-l-3xl">
                <img
                    src="2.svg"
                    alt="Modern AI Technology"
                    className="h-full w-full object-cover animate-fadeIn rounded-l-3xl"
                />
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center items-center px-8">
                <div className="max-w-md w-full bg-white shadow-xl border-4 border-[#003C60] rounded-3xl p-8 animate-slideInLeft">
                    <div className="text-center mb-4">
                        {/* Logo Placeholder */}
                        <span className="flex justify-center items-center text-4xl font-extrabold text-[#003C60] mb-4">LOGO</span>
                        <p className="text-gray-600 text-sm mb-4">
                            Create your Solar Intelli account to get started.
                        </p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-[#003C60] font-semibold mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 border-2 border-[#003C60] rounded-lg shadow-sm focus:outline-none"
                                />
                                <span className="absolute left-3 top-2.5 text-gray-400">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[#003C60] font-semibold mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border-2 border-[#003C60] rounded-lg shadow-sm focus:outline-none"
                                />
                                <span className="absolute left-3 top-2.5 text-gray-400">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[#003C60] font-semibold mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border-2 border-[#003C60] rounded-lg shadow-sm focus:outline-none"
                                />
                                <span className="absolute left-3 top-2.5 text-gray-400">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[#003C60] font-semibold mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full px-3 py-2 border-2 border-[#003C60] rounded-lg shadow-sm focus:outline-none"
                                />
                                <span className="absolute left-3 top-2.5 text-gray-400">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#3F7AFF] text-white font-bold py-2 rounded-full shadow-xl hover:scale-105 transition-all ease-in-out duration-700"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center font-medium text-sm text-[#003C60] mt-2">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="text-[#003C60] font-semibold hover:underline"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Register;
