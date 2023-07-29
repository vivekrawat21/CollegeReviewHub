"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [token, setToken] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    setToken(currentToken);
  }, []);

  const handleLogOut = (e:any) => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        <Link href="/" className="text-2xl font-bold">
          ReviewHub
        </Link>
      </div>

      <ul className="flex space-x-4 text-sm font-semibold">
        {token && (
          <li>
            <Link
              href="/Review"
              className="transition duration-300 ease-in-out hover:text-gray-700"
            >
              Reviews
            </Link>
          </li>
        )}
      </ul>
      {token ? (
        <button
          className="ml-10 px-4 py-2 rounded border-2 sm:flex border-black"
          onClick={handleLogOut}
        >
          Logout
        </button>
      ) : null}
    </nav>
  );
};

export default Navbar;
