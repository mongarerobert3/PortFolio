import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

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
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary justify-center" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {smallScreen && scrolled && (
          <span className='text-white font-medium'>Robert Mongare</span>
        )}

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Add your logo or brand name here */}
        </Link>

        {scrolled && (
          <ul className='list-none flex-row gap-10 hidden sm:flex'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                {nav.id === 'resume' ? (
                  <a
                    href="https://docs.google.com/document/d/1ea8a87A0YUunKEH5PcSqNYv_KRnEiMb8/edit?usp=sharing&amp;ouid=106085705588624337979&amp;rtpof=true&amp;sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.id === 'resume' ? (
                    <a
                      href="https://docs.google.com/document/d/1ea8a87A0YUunKEH5PcSqNYv_KRnEiMb8/edit?usp=sharing&amp;ouid=106085705588624337979&amp;rtpof=true&amp;sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='block text-black font-medium p-4'
                    >
                      {nav.title}
                    </a>
                  ) : nav.id === 'certificates' ? (
                    <a
                      href="https://drive.google.com/drive/u/1/folders/1a24Kx-AfrhgoKpyCrU858dlxg5JyIlJV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-black font-medium p-4"
                    >
                      {nav.title}
                    </a>
                  ) :
                  (
                    <a
                      href={`#${nav.id}`}
                      className='block text-black font-medium p-4'
                    >
                      {nav.title}
                    </a>
                  )}
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