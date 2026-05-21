import React, { useState } from "react";

const FutureHomeSection = () => {

  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <section className="bg-[#f3f3f3] py-24 px-4">
      
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1f2937] mb-5">
            Find your future home
          </h1>

          <p className="text-gray-500 text-xl">
            The houses best suited to your lifestyle, and the agents who know
            them best.
          </p>
        </div>

        <div className="bg-black rounded-lg p-7 m-7">
          
          <div className="flex flex-col min-[576px]:flex-row gap-5">
            
            <div className="w-full min-[576px]:w-[25%]">
              <label className="block text-white font-semibold mb-3">
                Status
              </label>

              <select className="w-full bg-[#2d2d2d] border border-gray-700 text-white px-5 py-4 rounded-md outline-none">
                <option>All</option>
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
            </div>

            <div className="w-full min-[576px]:w-[75%]">
              <label className="block text-white font-semibold mb-3">
                Address
              </label>

              <input
                type="text"
                placeholder="Search by City, Neighborhood, or Address"
                className="w-full bg-[#2d2d2d] border border-gray-700 text-white placeholder:text-gray-500 px-5 py-4 rounded-md outline-none"
              />
            </div>
          </div>

          {showAdvanced && (
            <div className="mt-6 text-white">

              <h2 className="text-2xl font-bold mb-5 text-white">
                Features
              </h2>

              {/* ========================= 768+ ========================= */}

                <div className="hidden md:block">

                  <div className="grid grid-cols-3 gap-5 mb-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Type
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>All</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Land</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Beds
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Baths
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-4 gap-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Min</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Max</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* ========================= 576 to 767 ========================= */}

                <div className="hidden min-[576px]:block md:hidden">

                  <div className="grid grid-cols-2 gap-5 mb-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Type
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>All</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Land</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Beds
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 mb-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Baths
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>Any</option>
                        <option>1+</option>
                        <option>2+</option>
                        <option>3+</option>
                        <option>4+</option>
                        <option>5+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Min</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Max</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-5 max-w-[250px]">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* ========================= 0 to 575 ========================= */}

                <div className="block min-[576px]:hidden">

                  <div className="mb-5">
                    <label className="block mb-2 font-semibold text-white">
                      Type
                    </label>

                    <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                      <option>All</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Land</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block mb-2 font-semibold text-white">
                      Beds
                    </label>

                    <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block mb-2 font-semibold text-white">
                      Baths
                    </label>

                    <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-5 mb-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Min</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>

                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Price
                      </label>

                      <select className="w-full bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-md text-white">
                        <option>No Max</option>
                        <option>$100</option>
                        <option>$200</option>
                        <option>$400</option>
                        <option>$700</option>
                        <option>$1,300</option>
                        <option>$2,500</option>
                        <option>$4,900</option>
                        <option>$9,800</option>
                        <option>$19,600</option>
                        <option>$39,100</option>
                        <option>$78,200</option>
                        <option>$156,300</option>
                        <option>$312,500</option>
                        <option>$625,000</option>
                        <option>$1,250,000</option>
                        <option>$2,500,000</option>
                      </select>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-5">

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Min Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-white">
                        Max Size
                      </label>

                      <div className="flex">
                        <input
                          type="number"
                          min="0"
                          className="w-full min-w-0 bg-[#2d2d2d] border border-gray-700 px-5 py-4 rounded-l-md outline-none text-white"
                        />

                        <span className="bg-[#2d2d2d] border border-l-0 border-gray-700 px-4 flex items-center rounded-r-md text-white">
                          SF
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-5 mt-8">
                    Amenities
                  </h2>

                  <div className="grid grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-3 gap-5">

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Internet
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Air Conditioning
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Disposal
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Garage
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Pool
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Fireplace
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Elevator
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Dishwasher
                      </label>

                      <label className="flex items-center gap-3">
                        <input type="checkbox" />
                        Balcony
                      </label>

                  </div>
                </div>
            </div>
          )}

          <div className="flex flex-col min-[400px]:flex-row items-center justify-between gap-5 mt-5">
            
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-gray-300 text-xs font-semibold tracking-wide uppercase hover:text-white transition duration-300 cursor-pointer mt-4"
            >
              {showAdvanced
                ? "Hide Advanced Search -"
                : "Show Advanced Search +"}
            </button>

            <button className="bg-blue-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition duration-300">
              SEARCH PROPERTIES
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureHomeSection;