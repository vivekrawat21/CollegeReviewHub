import React from "react";
import BackButton from "@/components/BackButton";
// Go to Assets/college.jpg
import Student from "@/Assets/college.jpg"
import Image from "next/image";
const Login = () => {
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
              />
            </div>
            <div className="mb-6">
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
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:w-1/2 px-4 hidden lg:block  ">
       <Image
       src={Student}
        alt="Student"
        height={500}
        width={500}
        className="rounded-lg shadow-md
        hover:shadow-xl transition duration-150 ease-in-out
        "
        />
        
      </div>
    </div>
  );
};

export default Login;
