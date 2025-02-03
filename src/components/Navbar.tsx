import { useState } from "react";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`bg-white lexend font-[400] text-darkGreen mt-3 p-2  z-50 fixed w-[95%] flex justify-between items-center text-lg  md:mt-6 md:w-[75%] md:justify-between ${
          isopen
            ? `rounded-t-3xl`
            : `rounded-3xl transition-all duration-500 ease-in-out`
        }`}
      >
        <div className="logo flex items-center justify-center font-[500]   gap-2   md:text-2xl md:flex-1">
          <a href="">
            <img src="/icons8-batman-logo.svg" alt="icon" className="w-14 " />
          </a>
          Yogi
        </div>
        <div className="content text-lg hidden md:block md:flex-2 ">
          <ul className="flex items-center justify-evenly">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="downloadCV-btn  md:text-xl md:flex-1">
          <a
            href="/Resume_YogenderPrasadKala.pdf"
            download="Resume_YogenderPrasadKala.pdf"
            className="bg-[#E6F1FF] px-3 py-2 rounded-2xl cursor-pointer transition duration-300 ease-in-out hover:bg-[#c7defd] active:bg-[#c7defd]  md:p-3"
          >
            Download CV
          </a>
        </div>
        <div className=" md:hidden" onClick={() => setIsOpen(!isopen)}>
          <img
            src={isopen ? "cross.svg" : "/hamburgerMenu.svg"}
            alt={isopen ? "Open menu" : "Close menu"}
          />
        </div>
        <div
          className={`bg-white absolute top-18 p-3 w-[100%] right-0 rounded-b-3xl transition-all duration-500 ease-in-out transform ${
            isopen
              ? "opacity-100 max-h-screen translate-y-0"
              : "opacity-0 max-h-0 -translate-y-4"
          }`}
          style={{ overflow: "hidden" }}
        >
          <ul className="grid place-items-center gap-4">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
