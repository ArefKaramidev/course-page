import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";

const Navbar = () => {
  return (
    <>
      <header className="flex bg-slate-400 items-center justify-between p-2 py-6 fixed top-0 left-0 w-full mb-8">
        <nav>
          <ul className="hidden gap-8 h-8 items-center justify-between sm:flex lg:flex">
            <Links />
          </ul>
          <HamburgerMenu />
        </nav>
        <span className="font-bold text-xl">Next One Code</span>
      </header>
    </>
  );
};

export default Navbar;
