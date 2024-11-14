import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-screen">
      <div className="h-screen flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
          <div className="w-full md:w-1/2">
            <img
              className="h-80 mx-auto mb-8 md:mb-0"
              src="https://static.vecteezy.com/system/resources/previews/010/870/980/non_2x/advertising-concept-3d-character-illustration-casual-man-peeping-coming-out-from-behind-a-green-screen-banner-free-png.png"
              alt="Signup Illustration"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-green-800 font-semibold w-full py-3 px-4 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-green-800 font-semibold w-full py-3 px-4 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="text-green-800 font-semibold w-full py-3 px-4 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg bg-green-600 text-white font-semibold text-lg transition duration-300 transform hover:bg-green-700 hover:scale-105"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
