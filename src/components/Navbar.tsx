import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav
      className="flex items-center justify-between px-8 py-4
    bg-gradient-to-r from-purple-200  to-blue-400 text-white
    "
    >
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
         ReviewHub
        </Link>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="transition duration-300 ease-in-out hover:text-red-100">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="transition duration-300 ease-in-out hover:text-red-100">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/" className="transition duration-300 ease-in-out hover:text-red-100">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
