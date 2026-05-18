import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="hover:text-gray-400 cursor-pointer text-3xl font-bold tracking-tight lowercase">
            resideo.
          </h1>
        </div>

        <ul className="flex items-center gap-6 text-[14px] font-semibold uppercase">

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Home
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                About Us
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Services
            </li>

            <li className="relative group">

            <span className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                Listings
            </span>

            <div className="absolute top-full pt-4 left-1/2 -translate-x-1/2 hidden group-hover:block z-5">

                <div className="bg-black w-64 py-5 px-6">

                <ul className="flex flex-col gap-5 text-sm font-semibold">

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    All Properties
                    </li>

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    For Sale
                    </li>

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    For Rent
                    </li>

                </ul>

                </div>

            </div>

            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Agents
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Blog
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Contact Us
            </li>

        </ul>

        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition duration-300">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;