import { FaUserLock, FaRobot, FaClipboardCheck, FaEye } from 'react-icons/fa'; // React Icons

const features = [
    {
        title: "User Authentication",
        description: "Secure login and profile management for users.",
        icon: <FaUserLock className="w-10 h-10 text-blue-600" />
    },
    {
        title: "AI-Powered Question Generation",
        description: "Generate questions aligned with CLOs.",
        icon: <FaRobot className="w-10 h-10 text-green-600" />
    },
    {
        title: "Automated Grading",
        description: "AI-powered grading and detailed performance reports.",
        icon: <FaClipboardCheck className="w-10 h-10 text-yellow-600" />
    },
    {
        title: "Real-Time Exam Monitoring",
        description: "Ensure integrity with AI-powered proctoring.",
        icon: <FaEye className="w-10 h-10 text-red-600" />
    },
];

const FeaturesAndContact = () => {
    return (
        <div className="font-inter">
            {/* Features Section */}
            <section id="features" className="py-12 bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-10">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white"
                            >
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="py-12 bg-white px-2">
                <div className="text-center mb-10">
                    <h1 className="text-lg lg:text-xl font-semibold uppercase mb-4 text-blue-600">
                        Contact Us
                    </h1>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto text-gray-900">
                        Get In Touch For Quick Support And Personalized Assistance Today
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-24">
                    {/* Left Section - Form */}
                    <div className="w-full lg:w-1/2  md:px-6 lg:px-16 space-y-5">
                        <form className="space-y-5">
                            <div className="space-y-1">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-blue-600"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg  shadow-sm focus:outline-none transition-all text-gray-800"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-600"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border  border-gray-300 rounded-lg  shadow-sm focus:outline-none transition-all text-gray-800"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-blue-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows={3}
                                    className="w-full px-4 py-2 border  border-gray-300 rounded-lg  shadow-sm focus:outline-none transition-all text-gray-800"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="relative px-10 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-full overflow-hidden shadow-md transition-all hover:shadow-lg hover:text-white group"
                            >
                                <span
                                    className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                                ></span>
                                <span className="relative z-10 group-hover:text-white">Submit</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-full lg:w-1/2 mt-8 md:-mt-6  ">
                        <img
                            src="Contact.svg"
                            alt="Contact illustration"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesAndContact;
