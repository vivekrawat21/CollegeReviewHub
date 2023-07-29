"use client";
import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import Images from "@/components/Images";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleLogIn = () => {
    fetch("http://localhost:3000/api/users/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.token); 
          router.push("/Review");
        }
      });
  };
  
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-[90vh] relative">
      <div className="lg:w-1/2 px-4 mb-8">
        <BackButton link="/" />
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h1 className="text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Login
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                type="button"
                onClick={handleLogIn}
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-700 text-sm">
              Don't have an account?
              <Link
                href="/Signup"
                className="text-slate-500 hover:text-slate-900 transition-colors duration-300 ease-in-out pl-2"
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Images />
    </div>
  );
};

export default Login;
