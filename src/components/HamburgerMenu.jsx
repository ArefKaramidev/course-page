import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Links from "./Links";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menubar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div onClick={menubar} className="sm:hidden lg:hidden">
        {isOpen ? (
          <CgClose className="text-3xl z-10 relative font-extrabold" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {isOpen && (
        <div className="w-60 h-60 absolute z-0 bg-gray-200 rounded-tr-md rounded-br-md left-0 top-0 text-center flex-col">
          <Links />
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
