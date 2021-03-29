import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [show, toggleShow] = useState(false);

  const toggleMenu = () => toggleShow(!show);

  return (
    <header className="bg-white shadow-lg sticky inset-x-0 top-0 z-20">
      <nav className="px-3 xl:max-w-7xl mx-auto py-3">
        <div className="flex justify-between items-center">
          {/* Logo & Primary Nav */}
          <div className="flex space-x-5 items-center">
            {/* Logo */}
            <div>
              <Link href="/">
                <a className="flex items-center">
                  <Image
                    src="/icons/outline/cube.svg"
                    height={35}
                    width={35}
                    alt="Icon"
                  />
                  <span className="ml-2 font-semibold text-gray-700">EZMARKET</span>
                </a>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:block space-x-3">
              <Link href="/products">
                <a className="text-gray-700">Products</a>
              </Link>
              <Link href="/categories">
                <a className="text-gray-700">Categories</a>
              </Link>
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="hidden md:block space-x-4">
            <Link href="/login">
              <a className="text-gray-700">Login</a>
            </Link>
            <Link href="/register">
              <a className="text-gray-700">Register</a>
            </Link>
          </div>

          {/* Mobile Toggler */}
          <div className="md:hidden flex items-center">
            <button
              className="md:hidden flex items-center"
              onClick={toggleMenu}
            >
              {show ? (
                <Image
                  src="/icons/solid/x.svg"
                  alt="Logo"
                  height={30}
                  width={30}
                />
              ) : (
                <Image
                  src="/icons/solid/menu.svg"
                  alt="Logo"
                  height={30}
                  width={30}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`${
          show ? "block" : "hidden"
        } md:hidden px-3 border-2 border-black`}
      >
        <Link href="/products">
          <a className="block py-1 text-gray-700">Products</a>
        </Link>
        <Link href="/categories">
          <a className="block py-1 text-gray-700">Categories</a>
        </Link>
        <Link href="/login">
          <a className="block py-1 text-gray-700">Login</a>
        </Link>
        <Link href="/register">
          <a className="block py-1 text-gray-700">Register</a>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
