import React from "react";
import { Search } from "lucide-react";

const properties = [
    {
        id: 1,
        image: "/images/property-1.jpg",
        title: "Awesome Interior Apartment",
        details: "4 BD | 2 BA | 2600 SF",
        price: "$1,240,000",
    },
    {
        id: 2,
        image: "/images/property-2.jpg",
        title: "Colorful Little Apartment",
        details: "1 BD | 1 BA | 500 SF",
        price: "$2,675 /mo",
    },
    {
        id: 3,
        image: "/images/property-3.jpg",
        title: "Remarkable Home on a Budget",
        details: "2 BD | 6 BA | 2000 SF",
        price: "$4,500 /mo",
    },
];

const PropertySearchSectionListings = () => {
    return (
        <section className="propertyListingsSection-wrapper bg-[#f5f5f5] py-20 pt-50">
            <div className="propertyListingsSection-container w-[90%] max-w-7xl mx-auto">

                <h2 className="propertyListingsSection-heading text-[45px] font-bold mb-16">
                Property Search
                </h2>

                <div className="flex flex-col min-[992px]:flex-row gap-10">

                    {/* Left Sidebar */}
                    <div className="propertyListingsSection-filterWrapper w-full min-[992px]:max-w-[350px]">

                        <h3 className="propertyListingsSection-filterTitle text-[24px] font-semibold mb-8">
                        Filter results
                        </h3>

                        <div className="propertyListingsSection-filterGroup mb-6">
                            <label className="propertyListingsSection-label block font-medium">
                                Status
                            </label>

                            <select className="propertyListingsSection-select w-full h-12 border rounded-md px-5">
                                <option>All</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                        </div>

                        <div className="propertyListingsSection-filterGroup mb-6">
                            <label className="propertyListingsSection-label block font-medium">
                                City/Neighborhood/Address
                            </label>

                            <div className="relative">
                                <input
                                type="text"
                                placeholder="Enter a location"
                                className="propertyListingsSection-input w-full h-12 border rounded-md pl-4 pr-12"
                                />

                                <Search
                                size={20}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="propertyListingsSection-filterGroup mb-6">
                            <label className="propertyListingsSection-label block font-medium">
                                Type
                            </label>

                            <select className="propertyListingsSection-select w-full h-12 border rounded-md px-5">
                                <option>All</option>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Land</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">

                            <div>
                                <label className="propertyListingsSection-label block font-medium">
                                Beds
                                </label>

                                <select className="propertyListingsSection-select w-full h-12 border rounded-md px-4">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                </select>
                            </div>

                            <div>
                                <label className="propertyListingsSection-label block font-medium">
                                Baths
                                </label>

                                <select className="propertyListingsSection-select w-full h-12 border rounded-md px-4">
                                <option>Any</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                </select>
                            </div>

                            <div>
                                <label className="propertyListingsSection-label block font-medium">
                                Min Price
                                </label>

                                <select className="propertyListingsSection-select w-full h-12 border rounded-md px-4">
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
                                <label className="propertyListingsSection-label block font-medium">
                                Max Price
                                </label>

                                <select className="propertyListingsSection-select w-full h-12 border rounded-md px-4">
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

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className="propertyListingsSection-label block font-medium mb-2">
                                    Min Size
                                </label>

                                <div className="flex">
                                    <input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    className="w-full h-12 border rounded-l-md px-4 outline-none"
                                    />

                                    <span className="h-12 px-5 border border-l-0 rounded-r-md flex items-center bg-white">
                                    SF
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="propertyListingsSection-label block font-medium mb-2">
                                    Max Size
                                </label>

                                <div className="flex">
                                    <input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    className="w-full h-12 border rounded-l-md px-4 outline-none"
                                    />

                                    <span className="h-12 px-5 border border-l-0 rounded-r-md flex items-center bg-white">
                                    SF
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="propertyListingsSection-contentWrapper flex-1">

                        {/* Top Bar */}
                        <div className="propertyListingsSection-topBar flex justify-between items-center mb-8">
                        <h3 className="propertyListingsSection-resultsCount text-[22px] font-semibold">
                            1 - 12 of 16 Results
                        </h3>

                        <div className="propertyListingsSection-actions flex gap-4">
                            <button className="propertyListingsSection-saveButton bg-blue-600 text-white px-8 h-16 rounded-md font-semibold">
                            SAVE SEARCH
                            </button>

                            <select className="propertyListingsSection-sortSelect border h-16 px-5 rounded-md">
                            <option>Default Sort</option>
                            </select>
                        </div>
                        </div>

                        {/* Property Grid */}
                        <div className="propertyListingsSection-grid grid grid-cols-1 min-[768px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-8">

                        {/* Card */}
                        <div className="propertyListingsSection-card">
                            <div className="relative overflow-hidden rounded-md">

                            <img
                                src="/images/property-1.jpg"
                                alt=""
                                className="propertyListingsSection-cardImage w-full h-[320px] object-cover"
                            />

                            <span className="propertyListingsSection-featuredBadge absolute top-5 right-5 bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
                                FEATURED
                            </span>

                            </div>

                            <div className="propertyListingsSection-cardContent mt-5">
                            <h4 className="propertyListingsSection-cardTitle text-[20px] font-semibold">
                                Awesome Interior Apartment
                            </h4>

                            <p className="propertyListingsSection-cardMeta text-gray-500 mt-2">
                                4 BD | 2 BA | 2600 SF
                            </p>

                            <p className="propertyListingsSection-cardPrice text-[40px] font-bold mt-3">
                                $1,240,000
                            </p>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PropertySearchSectionListings;