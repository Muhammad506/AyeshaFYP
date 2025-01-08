import { useEffect, useState } from "react";

const HeroAboutSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Welcome to the FYP Portal",
            description:
                "Revolutionize your educational experience with AI-powered tools for question generation, grading, and performance analysis.",
            image: "hero1.svg",
        },
        {
            title: "Empowering Education",
            description:
                "Leverage the power of AI to streamline assessments and enhance learning experiences for students and educators alike.",
            image: "h2.svg",
        },
        {
            title: "Future-Ready Learning",
            description:
                "Discover intelligent solutions that simplify exam management and boost performance tracking like never before.",
            image: "h1.svg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000); // Slides change every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section>
            {/* Hero Section */}
            <div className="relative  max-h-screen bg-gradient-to-tr from-[#79A3FF] to-[#A8D8F0] border-b border-black">
                {/* Carousel */}
                <div className="h-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="min-w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16"
                            >
                                {/* Left Section */}
                                <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
                                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-xl text-white">
                                        {slide.description}
                                    </p>
                                </div>
                                {/* Right Section */}
                                <div className="md:w-1/2">
                                    <img
                                        src={slide.image}
                                        alt="Hero Slide"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div
                id="about-us"
                className="py-2 bg-gray-50 text-black flex flex-col md:flex-row items-center text-center md:text-left"
            >
                <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center">
                    {/* Left Section (Image) */}
                    <div className="md:w-1/2">
                        <img
                            src="about.svg"
                            alt="About Us"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Right Section (Text) */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-extrabold leading-tight mb-6 text-gray-800">
                            About Us
                        </h2>
                        <p className="text-lg text-gray-800 mb-4">
                            Our platform empowers educators and students by leveraging AI for seamless exam management, question generation, and performance tracking.
                        </p>
                        <p className="text-md text-gray-800 mb-6">
                            We are committed to revolutionizing the education sector with intelligent solutions that make learning and assessment easier.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-blue-600 text-white rounded-full py-3 px-8 font-semibold transition duration-300 ease-in-out hover:bg-blue-700"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAboutSection;
