import { useState } from "react";
import { Burger } from "./Burger";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex bg-white md:h-auto  justify-between px-3 items-center py-2 shadow-md fixed w-full z-[100] top-0 rounded-b-md">
      <Burger handleClick={toggleMenu} clicked={isOpen} />
      <div>

      </div>
      <div className="md:flex gap-2 hidden">
        <a href="/lecciones" className="p-2 hover:bg-gray-100 rounded-md">
          <span className="font-bold text-gray-500">Lecciones</span>
        </a>
        <a href="" className="p-2 hover:bg-gray-100 rounded-md">
          <span className="font-bold text-gray-500">Preguntas Frecuentes</span>
        </a>
        <a href="" className="p-2 hover:bg-gray-100 rounded-md">
          <span className="font-bold text-gray-500">Contactanos</span>
        </a>
        <a href="" className="p-2 hover:bg-gray-100 rounded-md">
          <span className="font-bold text-gray-500 ">Donaciones</span>
        </a>
      </div>
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
