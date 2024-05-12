"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex flex-wrap items-center justify-between border border-b-[#33353F] max-container padding-container z-30 py-5 ${isScrolled ? 'bg-[#121212] bg-opacity-90' : 'bg-[#121212]'}`}>
      <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-300 to-white">V12</span>
      </Link>

      <div className="flex items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <img
              className="w-6 h-6 text-gray-500 cursor-pointer border rounded border-purple-300"
              src="/close.svg"
              alt="Close Icon"
            />
          ) : (
            <img
              className="w-6 h-6 text-gray-500 cursor-pointer border rounded border-purple-300"
              src="/menu.svg"
              alt="Menu Icon"
            />
          )}
        </button>
        {isOpen && (
          <ul className="lg:hidden flex flex-col items-center gap-4 absolute top-full left-0 w-full bg-[#121212] bg-opacity-95 py-4 px-2 rounded shadow-md">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} setIsOpen={setIsOpen}/>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="hidden lg:flex flex-wrap justify-end gap-12">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} setIsOpen={setIsOpen}/>
          </li>
        ))}
      </div>
    </nav>     
  )
}

export default NavBar