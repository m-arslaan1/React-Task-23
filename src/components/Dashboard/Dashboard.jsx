import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex gap-5 h-auto mb-10 px-4 sm:px-6 lg:px-8">
      <div className="ml-2 flex flex-col gap-8 mr-2 w-full lg:w-2/5">
        
        <div className="border-2 shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
          <div
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://upskillmafia.com/mern/assets/dashboard-BbZng_dZ.png')",
            }}
          ></div>
          <div className="bg-white p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upskill Mafia</h2>
            <h3 className="text-xl text-gray-600 mb-4">Master Web Development in Virtual College</h3>
            <p className="text-base text-gray-700">
              A virtual space where anyone can become a complete Full Stack developer by project-based learning (HTML, CSS, JS, MongoDB, NodeJS, ReactJS, Tailwind, and AI).
            </p>
          </div>
        </div>

        <div className="border-2 shadow-lg rounded-xl p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Popular Posts</h2>
          <ul className="list-none space-y-4">
            {["Task based Learning", "Group Study with other Students", "Live 1:1 Mentorship", "Earn Your Industry-Recognized Certificate"].map((item, index) => (
              <li key={index} className="text-lg hover:underline cursor-pointer">
                <div className="flex gap-2 pb-1 border-b-2 border-gray-200">
                  <img
                    className="w-10 h-8 rounded-sm"
                    src={`https://picsum.photos/200?random=${index}`}
                    alt={item}
                  />
                  <span className="text-[15px] text-gray-600">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-2 rounded-xl shadow-lg bg-white p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tags</h2>
          <ul className="flex flex-wrap items-center text-center list-none gap-3">
            {["WebDevelopment", "AI", "Frontend", "JavaScript", "React", "Node", "Express", "MongoDB", "ReactNative"].map((tag, index) => (
              <li key={index} className="bg-green-400 text-white px-4 py-1 rounded-md text-sm hover:bg-green-500 transition duration-200 ease-in-out cursor-pointer">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mr-2 h-full border-2 rounded-xl shadow-lg ml-2 w-full lg:w-3/5 bg-white relative">
        <div className="h-[90vh] bg-cover bg-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ekUNJ33IEQw?autoplay=1&mute=1&si=h97QDBpSQT_zwSsb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Overview</h2>
          <p className="text-sm font-bold text-gray-600">Title Description - <span className="text-gray-500 font-bold">November 2024</span></p>
          <p className="mt-3 text-base text-gray-700">
            Upskillmafia, a product by Tutedude, is a virtual college where students can come and learn along with their peers. Our aim is to provide an offline classroom experience in an online world. By offering mentorship from successful people, we help students shorten their failure or struggle curves, and accelerate their learning to achieve their goals faster.
          </p>
        </div>

        <div className="p-6 flex justify-between items-center">
          <button className="text-sm px-6 py-2 font-bold bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
            READ MORE &gt;&gt;
          </button>
          <p className="text-sm text-gray-600">
            Comments <span className="border-2 rounded-md px-2 bg-black text-white">0</span>
          </p>
        </div>
      </div>
    </div>
  );
}
