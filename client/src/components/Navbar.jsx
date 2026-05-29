import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ transparent }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);
  return (
    <nav
      className={`w-full text-white border-gray-800 fixed top-0 left-0 z-50 duration-300 ${
      scroll ? "bg-black" : transparent ? "bg-transparent" : "bg-black"
    }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="hover:text-gray-400 cursor-pointer text-3xl font-bold tracking-tight lowercase">
            resideo.
          </h1>
        </div>

        <ul className="hidden min-[992px]:flex items-center gap-6 text-[14px] font-semibold uppercase">

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Home
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                <Link to="/about">
                    About Us
                </Link>
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                <Link to="/services">
                    Services
                </Link>
            </li>

            <li className="relative group">

            <span className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              Listings
            </span>

            <div className="absolute top-full pt-4 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">

                <div className="bg-white text-black w-64 py-5 px-6">

                <ul className="flex flex-col gap-5 text-sm font-semibold">

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                      <Link to="/listings">
                        All Properties
                      </Link>
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

            <li className="relative group">

            <span className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                AGENTS
            </span>

            <div className="absolute top-full pt-4 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">

                <div className="bg-white text-black w-64 py-5 px-6">

                <ul className="flex flex-col gap-5 text-sm font-semibold">

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    Agents List
                    </li>

                    {/* <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    For Sale
                    </li>

                    <li className="hover:text-gray-400 cursor-pointer transition duration-300">
                    For Rent
                    </li> */}

                </ul>

                </div>

            </div>

            </li>

            {/* <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Agents
            </li> */}

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Blog
            </li>

            <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                Contact Us
            </li>

        </ul>

        <div className="flex items-center gap-3 min-[992px]:hidden">

          <div onClick={() => setMenuOpen(true)} className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer">

            <div className="flex flex-col gap-[3px]">
              <span className="w-4 h-[1.5px] bg-white"></span>
              <span className="w-4 h-[1.5px] bg-white"></span>
              <span className="w-4 h-[1.5px] bg-white"></span>
            </div>

          </div>

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

        <div className="hidden min-[992px]:flex w-10 h-10 rounded-full border border-white items-center justify-center cursor-pointer hover:bg-white hover:text-black transition duration-300">

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

      {/* Mobile Menu Overlay */}

      {menuOpen && (

        <div className="fixed inset-0 bg-black z-[10] text-white min-[991px]:hidden overflow-y-auto">

          <div className="max-w-7xl mx-auto px-16 py-8">

            <div className="flex items-center justify-between">

              <h1 className="text-3xl font-bold lowercase">
                resideo.
              </h1>

              <div
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer text-xl font-bold"
              >
                ×
              </div>

            </div>

            <div className="mt-14 flex flex-col gap-8">

              <div>
                <h2 className="text-2xl font-bold">Home</h2>
              </div>

              <div>
                <h2 className="text-2xl font-bold">About Us</h2>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Services</h2>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-5">Listings</h2>

                <ul className="flex flex-col gap-5 text-lg font-semibold">
                  <li>All Properties</li>
                  <li>For Sale</li>
                  <li>For Rent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-5">Agents</h2>

                <ul className="flex flex-col gap-5 text-lg font-semibold">
                  <li>Agents List</li>
                  {/* <li>Melvin Blackwell</li>
                  <li>Alayna Becker</li>
                  <li>Scott Goodwin</li>
                  <li>Erika Tillman</li> */}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold">BLOG</h2>
              </div>

              <div>
                <h2 className="text-2xl font-bold">CONTACT AS</h2>
              </div>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;