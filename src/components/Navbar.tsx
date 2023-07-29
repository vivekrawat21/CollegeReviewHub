"use client";
// Import the required modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

type Props = {};

const Navbar = (props: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    setToken(currentToken);
  }, []);

  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem("token");

    setTimeout(() => {
      setLoading(false);
      router.push("/Login");
    }, 1500);
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          <Link href="/" className="text-2xl font-bold">
            ReviewHub
          </Link>
        </div>

        <ul className="flex space-x-4 text-lg font-bold justify-center items-center">
          {token && (
            <>
              <li className="mr-8">
                <Link
                  href="/Review"
                  className="transition duration-300 ease-in-out hover:text-gray-700"
                >
                  Reviews
                </Link>
              </li>
              <li>
                {!loading ? (
                  <button
                    className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                ) : (
                  <LoadingSpinner />
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
      <hr className="w-full my-2 border-gray-300" />
    </div>
  );
};

export default Navbar;
