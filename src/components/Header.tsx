import { useState } from "react";
import { Burger } from "./Burger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex bg-white md:h-auto  justify-between px-3 items-center py-2 shadow-md fixed w-full z-[100] top-0 rounded-b-md">
      <Burger handleClick={toggleMenu} clicked={isOpen} />
      <a href="/" className="cursor-pointer">
        <img
          src="/images/logo.webp"
          alt="Logo"
          className="w-[90px] h-[70px] bg-cover"
        />
      </a>
    </header>
  );
}
