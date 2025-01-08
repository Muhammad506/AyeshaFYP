import "@fontsource/inter";
import Navbar from "./components/Home/Navbar";
import FAQs from "./components/Home/Faqs";
import Footer from "./components/Home/Footer";

import FeaturesAndContact from "./components/Home/FeaturesAndContact";
import HeroAndAbout from "./components/Home/HeroAndAbout";
// import Login from "./components/Login"
// import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroAndAbout />
      <FeaturesAndContact />
      <FAQs />
      <Footer />
      {/* <Login /> */}
      {/* <Register/> */}
    </div>
  )
}

export default App
