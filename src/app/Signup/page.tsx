import React from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";

const SignUp = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-[90vh] relative">
      <div className="lg:w-1/2 px-4 mb-8">
        <BackButton link="/" />
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Sign Up
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">
            Already have an account?
            <Link href="/Login"
              className="text-slate-500 hover:text-slate-900 transition-colors duration-300 ease-in-out">
                Login
            </Link>
          </p>
        </div>
        </div>
      </div>

      <div className="lg:w-1/2 px-4 hidden lg:block">
        {/* Replace the src attribute with the URL of your desired image */}
        <img
          src="https://via.placeholder.com/400" // Replace this with the URL of your image
          alt="Random Image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;
