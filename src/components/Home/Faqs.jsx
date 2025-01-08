import { useState } from 'react';

const faqs = [
    { question: "What is the FYP Portal?", answer: "An AI-powered platform for exam management." },
    { question: "Who can use this system?", answer: "Students, instructors, and administrators." },
    { question: "Is my data secure?", answer: "Yes, we use encryption and secure storage." },
    { question: "How do I create an account?", answer: "Visit the sign-up page and follow the instructions." },
    { question: "Can I reset my password?", answer: "Yes, you can reset your password using the 'Forgot Password' link." },
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="font-inter py-12 ">
            <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side (Image) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src="FAQ.svg"
                        alt="FAQ Illustration"
                        className="w-full max-w-md md:max-w-full object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Right Side (FAQ Content) */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl font-extrabold text-center md:text-left text-gray-800 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-center md:text-left text-gray-600 mb-8">
                        Find answers to some of the most common questions about our platform.
                    </p>
                    <div className="w-full space-y-2">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <div
                                    className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-blue-100"
                                    onClick={() => toggleAnswer(index)}
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`faq-${index}`}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                    <svg
                                        className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>

                                {/* Answer Section */}
                                {activeIndex === index && (
                                    <div
                                        id={`faq-${index}`}
                                        className="px-6 py-4 text-gray-700 text-sm bg-blue-50 rounded-b-lg transition-all duration-300"
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
