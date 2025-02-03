import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" w-[100%]">
      <div className="flex justify-center w-[100%]">
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
