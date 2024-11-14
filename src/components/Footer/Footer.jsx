import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t py-6">
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:px-12">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/dashboard" className="flex items-center">
              <img
                src="./UM-logo.svg"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:gap-12">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-3 text-lg font-semibold text-gray-800 uppercase">
                Resources
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <Link to="/" className="hover:text-green-600 hover:underline transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-green-600 hover:underline transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="hover:text-green-600 hover:underline transition-colors duration-300">
                    Register for Free
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h2 className="mb-3 text-lg font-semibold text-gray-800 uppercase">
                Connect With Us
              </h2>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-700 hover:text-black transition-colors duration-300">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black transition-colors duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 sm:text-center">
            © 2023 UpskillMafia. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
