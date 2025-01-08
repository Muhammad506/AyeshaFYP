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
        <div className='font-inter'>
            {/* Features Section */}
            <section id="features" className="py-6 bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <div className="flex flex-col lg:flex-row items-center border-t border-gray-300 pt-6 pb-8 px-4 lg:px-24 bg-white">
                {/* Left Section with Form */}
                <div className="w-full lg:w-1/2 px-6 lg:px-16 space-y-6">
                    <h1 className="text-3xl font-bold text-[#1D3557]">Contact Us</h1>
                    <p className="text-gray-700">We’d love to hear from you. Feel free to reach out for any inquiries.</p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full border-b border-[#1D3557] focus:outline-none focus:ring-0 focus:border-[#457B9D] text-[#1D3557] py-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-700">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full border-b border-[#1D3557] focus:outline-none focus:ring-0 focus:border-[#457B9D] text-[#1D3557] py-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-700">Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full border-b border-[#1D3557] focus:outline-none focus:ring-0 focus:border-[#457B9D] text-[#1D3557] py-2"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#1D3557] hover:bg-[#457B9D] text-white py-2 px-6 rounded-full transition"
                        >
                            Contact Us
                        </button>
                    </form>
                </div>

                {/* Right Section with Image */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <img
                        src="Contact.svg"
                        alt="Contact illustration"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturesAndContact;
