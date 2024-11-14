import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-auto gap-5 p-6">
      <div className="lg:w-3/5 h-full rounded-lg shadow-lg bg-white relative">
        <div className="relative h-[90vh]">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src="https://mongabay-images.s3.amazonaws.com/rainforests/photos/costa_rica_osa_0077_2100x1400.jpg"
            alt="Costa Rica Rainforest"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-t-lg"></div>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Rainforest in Costa Rica
          </h2>
          <p className="text-sm font-bold text-gray-500">
            Title Description -{" "}
            <span className="text-gray-700 font-bold">November 2024</span>
          </p>
          <p className="mt-4 text-base text-gray-700">
            The term "jungle" is frequently applied to forest areas having dense
            ground growth. Such "jungle" is characteristic of disturbed forest,
            usually near the forest edges, in recently opened light gaps, river
            banks, and areas where the forest is reclaiming previously cleared
            land. Vigorous ground growth is only possible where plenty of light
            is available—where there is a break or thinning in the
            light-absorbing canopy which screens out all but the 0.5-5 percent
            of light that reaches the floor in the primary forest.
          </p>
        </div>

        <div className="p-6 flex justify-between items-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-green-500 transition duration-300">
            READ MORE &gt;&gt;
          </button>
          <p className="text-sm">
            Comments{" "}
            <span className="bg-black text-white px-2 rounded-full">0</span>
          </p>
        </div>
      </div>
      <div className="lg:w-2/5 flex flex-col gap-8">
        <div className="border-2 shadow-lg rounded-lg">
          <div
            className="h-64 bg-cover bg-center rounded-t-lg"
            style={{
              backgroundImage:
                "url('https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai?$QC_Responsive$&fmt=png-alpha&wid=500')",
            }}
          ></div>
          <div className="bg-white p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Power of AI
            </h2>
            <p className="text-base text-gray-700">
              The field of AI is advancing so quickly that many experts are
              hesitant to even speculate about potential future use cases,
              noting that literally anything could be on the table. But, some
              applications are currently in preliminary or piloting phases of
              development and could start to see more widespread uptake in the
              coming years.
            </p>
          </div>
        </div>

        <div className="border-2 shadow-lg rounded-lg bg-white p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Popular Posts
          </h2>
          <ul className="space-y-4">
            <li className="text-lg hover:text-green-600 cursor-pointer flex gap-2 items-center">
              <img
                className="w-10 h-8 rounded-full"
                src="https://media.licdn.com/dms/image/v2/C5112AQEjOjdSdlrVIw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1528887731986?e=2147483647&v=beta&t=bu6WDrO3Vh_jLi5icV7skxkAZ8xUypG61RNbrzcvgd8"
                alt="The Rise of Web Development"
              />
              <span>The Rise of Web Development</span>
            </li>
            <li className="text-lg hover:text-green-600 cursor-pointer flex gap-2 items-center">
              <img
                className="w-10 h-8 rounded-full"
                src="https://media.licdn.com/dms/image/C4D12AQHKmP4gKowEag/article-cover_image-shrink_600_2000/0/1520781719914?e=2147483647&v=beta&t=_fKY-YKYO-SD_Vj9TWVSS1TqTsemfgHWzbXDGIOEIYQ"
                alt="How AI is Changing the World"
              />
              <span>How AI is Changing the World</span>
            </li>
            <li className="text-lg hover:text-green-600 cursor-pointer flex gap-2 items-center">
              <img
                className="w-10 h-8 rounded-full"
                src="https://admin.scale3c.com/api/wp-content/uploads/2019/08/Future-of-Front-End-Development2020.png"
                alt="The Future of Frontend Development"
              />
              <span>The Future of Frontend Development</span>
            </li>
            <li className="text-lg hover:text-green-600 cursor-pointer flex gap-2 items-center">
              <img
                className="w-10 h-8 rounded-full"
                src="https://images.ctfassets.net/93e8slakzebf/5xuulnxjLlvEOHJQPoxBsA/711e77d9dc29d76f4e2e95841037e844/top-8-JavaScript-1.jpg"
                alt="JavaScript Trends You Need to Know"
              />
              <span>JavaScript Trends You Need to Know</span>
            </li>
          </ul>
        </div>

        <div className="border-2 rounded-lg shadow-lg bg-white p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tags</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              "WebDevelopment",
              "AI",
              "Frontend",
              "JavaScript",
              "React",
              "Node",
              "Express",
              "MongoDB",
              "ReactNative",
            ].map((tag) => (
              <li
                key={tag}
                className="bg-green-400 text-white px-3 py-1 text-sm rounded-md cursor-pointer hover:bg-green-500"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
