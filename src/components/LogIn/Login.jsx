import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-screen flex justify-center items-center">
      <div className="flex gap-6 bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl relative">
        
        <div className="w-full md:w-1/2">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="https://img.freepik.com/premium-vector/concept-man-thinking-laptop-forgot-your-password-account-login_505620-922.jpg"
            alt="Login"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-green-800 w-full py-3 px-4 rounded-lg border-2 border-gray-300 font-semibold focus:outline-none focus:border-green-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 text-green-800 font-semibold focus:outline-none focus:border-green-500 transition duration-200"
                required
              />
            </div>
            <div className="text-right m-0">
              <Link to="#" className="text-xs text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button className="w-full py-3 px-6 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition duration-300">
              LOGIN
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-600 hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
