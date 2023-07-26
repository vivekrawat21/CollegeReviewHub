import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Link href="/">
          <button
            className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Back
          </button>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1
          className="text-4xl font-bold mb-6
           bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          Sign Up
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
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
              className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
              transition-colors duration-300 ease-in-out"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="inline-block align-baseline font-bold text-sm text-slate-800 hover:text-slate-700 text-center mt-4 ml-8">
          Already have an account?
          <span>
            <Link href="/Login">
              <button
                className="text-slate-500 hover:text-slate-900 ml-2
              transition-colors duration-300 ease-in-out"
              >
                Login
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
