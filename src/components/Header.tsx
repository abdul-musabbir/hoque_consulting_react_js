import { MutableRefObject, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// motion
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
export default function Header() {
  const headerRef: MutableRefObject<HTMLElement | null> =
    useRef<HTMLElement | null>(null);

  // const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      headerRef.current?.classList.toggle("backdrop-blur-2xl", scrolled);
      headerRef.current?.classList.toggle("bg-blacks", scrolled);
      headerRef.current?.classList.toggle("shadow-xl", scrolled);
    };

    // Attach scroll and load event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []); // No dependencies, run once

  return (
    <motion.header
      ref={headerRef}
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      exit={"hidden"}
      id="header"
      className="h-20 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-opacity-30"
    >
      <div className="mx-auto flex w-4/5 xl:w-[1200px]">
        <div className="flex w-full items-center justify-between">
          {/* Logo Section */}
          <div className="leading-3">
            <a href="#" className="select-none">
              <h2 className="text-2xl font-bold xl:text-3xl text-white">
                Hoque <span className="text-greens">Consulting&reg;</span>
              </h2>
              <span className="text-white text-opacity-80">
                Solution provider
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button id="menu-button" className="text-xl">
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            id="menu-container"
            className="absolute top-20 left-0 hidden w-full animates lg:static lg:block lg:w-auto"
            style={{ zIndex: "9999999" }}
          >
            <div className="w-full flex items-center justify-center">
              <div className="bg-blacks md:w-[400px] md:h-[450px] lg:h-auto p-5 px-16 lg:bg-transparent rounded-xl shadows lg:shadow-none lg:rounded-none lg:bg-none lg:p-0 flex items-center justify-center lg:w-auto lg:items-stretch lg:justify-normal">
                <ul className="flex flex-col gap-4 text-white text-center lg:flex-row lg:items-center xl:gap-6">
                  {[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services" },
                    { label: "Portfolio", path: "/portfolio" },
                    { label: "Pricing", path: "/pricing" },
                    { label: "About Us", path: "/about-us" },
                    { label: "Contact Us", path: "/contact-us" },
                  ].map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path} className="font-normal text-base">
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button className="bg-greens text-blacks font-medium px-6 py-2 rounded-xl cursor-pointer">
                      Get Quote
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
