"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    setToken(currentToken);
  }, []);

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        <Link href="/" className="text-2xl font-bold">
          ReviewHub
        </Link>
      </div>

      <ul className="flex space-x-4 text-sm font-semibold">
        <li>
          <Link href="/" className="transition duration-300 ease-in-out hover:text-gray-700">
            Home
          </Link>
        </li>
        {token && (
          <li>
            <Link href="/Review" className="transition duration-300 ease-in-out hover:text-gray-700">
              Reviews
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
