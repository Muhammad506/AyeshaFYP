import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0] text-black py-12">
      <div className="container mx-auto px-6 text-center grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Grid 1: Logo and Website Details */}
        <div className="flex flex-col items-center">
          {/* <img
            src="/logo.svg" // Replace with your logo path
            alt="Logo"
            className="w-40 lg:w-48 object-contain mb-4" // Adjust size for responsiveness
          /> */}
          <span className='text-center font-extrabold flex justify-center items-center text-3xl'>LOGO</span>
          <p className="text-sm text-gray-900 mt-2">
            FYP Portal - Your trusted platform for solar energy solutions
          </p>
        </div>

        {/* Grid 2: Links Section */}
        <div className="flex flex-col items-center space-y-4">
          <a href="#home" className="hover:text-gray-200 text-lg font-semibold transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200 text-lg font-semibold transition duration-300">
            About
          </a>
          <a href="#features" className="hover:text-gray-200 text-lg font-semibold transition duration-300">
            Features
          </a>
          <a href="#contact" className="hover:text-gray-200 text-lg font-semibold transition duration-300">
            Contact
          </a>
        </div>

        {/* Grid 3: Contact Info Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">Contact Info</p>
          <p className="text-sm text-gray-800">Phone: (123) 456-7890</p>
          <p className="text-sm text-gray-800 mb-4">Email: info@fypportal.com</p>
          <div className="flex space-x-6 mt-4 justify-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-500 my-8 w-2/3 mx-auto" />
      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-900 mt-8">
        <p>&copy; 2025 FYP Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;