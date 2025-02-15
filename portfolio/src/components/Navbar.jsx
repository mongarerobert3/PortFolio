import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

// Reusable NavLink Component
const NavLink = ({ nav, onClick }) => {
  const isExternalLink = nav.id === "resume" || nav.id === "certificates";
  const href =
    nav.id === "resume"
      ? "https://docs.google.com/document/d/1ea8a87A0YUunKEH5PcSqNYv_KRnEiMb8/edit?usp=sharing&ouid=106085705588624337979&rtpof=true&sd=true"
      : nav.id === "certificates"
      ? "https://drive.google.com/drive/u/1/folders/1a24Kx-AfrhgoKpyCrU858dlxg5JyIlJV"
      : `#${nav.id}`;

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className="block text-black font-medium p-4"
      onClick={onClick}
    >
      {nav.title}
    </a>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSection = document.getElementById("heroSection");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (scrollTop > 100 && rect.bottom <= 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary justify-center" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {smallScreen && scrolled && (
          <span className="text-white font-medium">Robert Mongare</span>
        )}

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Add your logo or brand name here */}
        </Link>

        {scrolled && (
          <ul className="list-none flex-row gap-10 hidden sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <NavLink nav={nav} />
              </li>
            ))}
          </ul>
        )}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <NavLink nav={nav} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
