import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const properties = [
    {
        id: 1,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Awesome Interior Apartment",
        details: "4 BD | 2 BA | 2600 SF",
        price: "$1,240,000",
    },
    {
        id: 2,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-17-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bathroom-4-800x600.jpg",
        ],
        title: "Colorful Little Apartment",
        details: "1 BD | 1 BA | 500 SF",
        price: "$2,675 /mo",
    },
    {
        id: 3,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Remarkable Home on a Budget",
        details: "2 BD | 6 BA | 2000 SF",
        price: "$4,500 /mo",
    },
    {
        id: 4,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Awesome Interior Apartment",
        details: "4 BD | 2 BA | 2600 SF",
        price: "$1,240,000",
    },
    {
        id: 5,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-17-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bathroom-4-800x600.jpg",
        ],
        title: "Colorful Little Apartment",
        details: "1 BD | 1 BA | 500 SF",
        price: "$2,675 /mo",
    },
    {
        id: 6,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Remarkable Home on a Budget",
        details: "2 BD | 6 BA | 2000 SF",
        price: "$4,500 /mo",
    },
    {
        id: 7,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Awesome Interior Apartment",
        details: "4 BD | 2 BA | 2600 SF",
        price: "$1,240,000",
    },
    {
        id: 8,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-17-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bathroom-4-800x600.jpg",
        ],
        title: "Colorful Little Apartment",
        details: "1 BD | 1 BA | 500 SF",
        price: "$2,675 /mo",
    },
    {
        id: 9,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Remarkable Home on a Budget",
        details: "2 BD | 6 BA | 2000 SF",
        price: "$4,500 /mo",
    },
    {
        id: 10,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Awesome Interior Apartment",
        details: "4 BD | 2 BA | 2600 SF",
        price: "$1,240,000",
    },
    {
        id: 11,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-17-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-4-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bathroom-4-800x600.jpg",
        ],
        title: "Colorful Little Apartment",
        details: "1 BD | 1 BA | 500 SF",
        price: "$2,675 /mo",
    },
    {
        id: 12,
        images: [
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/prop-18-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/kitchen-66-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/bedroom-6-800x600.jpg",
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-800x600.jpg",
        ],
        title: "Remarkable Home on a Budget",
        details: "2 BD | 6 BA | 2000 SF",
        price: "$4,500 /mo",
    },
    
];

const PropertySearchSectionListings = () => {
    const [currentImages, setCurrentImages] = useState({});
    const nextImage = (propertyId, totalImages) => {
        setCurrentImages((prev) => ({
            ...prev,
            [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages,
        }));
    };

    const prevImage = (propertyId, totalImages) => {
        setCurrentImages((prev) => ({
            ...prev,
            [propertyId]:
            ((prev[propertyId] || 0) - 1 + totalImages) % totalImages,
        }));
    };

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

                            <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-5">
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

                            <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-5">
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

                                <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-4">
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

                                <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-4">
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

                                <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-4">
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

                                <select className="propertyListingsSection-select cursor-pointer w-full h-12 border rounded-md px-4">
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

                        <div className="mt-8">
                            <h4 className="text-[20px] font-semibold mb-6">
                                Amenities
                            </h4>

                            <div className="flex flex-col gap-5">
                                {[
                                "Internet",
                                "Garage",
                                "Elevator",
                                "Air Conditioning",
                                "Pool",
                                "Dishwasher",
                                "Disposal",
                                "Fireplace",
                                "Balcony",
                                ].map((item) => (
                                <label key={item} className="cursor-pointer flex items-center gap-3">
                                    <input type="checkbox" className="cursor-pointer w-5 h-5" />
                                    <span>{item}</span>
                                </label>
                                ))}
                            </div>

                            <button className="cursor-pointer mt-8 w-[60%] h-14 bg-blue-600 text-white font-semibold rounded-md">
                                APPLY FILTERS
                            </button>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="propertyListingsSection-contentWrapper flex-1">

                        <div className="propertyListingsSection-topBar flex justify-between items-center mb-8">
                            <h3 className="propertyListingsSection-resultsCount text-[20px] font-bold">
                                1 - 12 of 16 Results
                            </h3>

                            <div className="propertyListingsSection-actions flex gap-4">
                                <button className="propertyListingsSection-saveButton bg-blue-600 text-white px-8 h-13 rounded-md font-semibold">
                                SAVE SEARCH
                                </button>

                                <select className="propertyListingsSection-sortSelect border h-13 px-5 rounded-md">
                                    <option>Default Sort</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Beds</option>
                                    <option>Baths</option>
                                    <option>Size</option>
                                </select>
                            </div>
                        </div>

                        <div className="propertyListingsSection-grid grid grid-cols-1 min-[768px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-8">
                            
                            {properties.map((property) => (
                                <div key={property.id} className="propertyListingsSection-card">
                                    <div className="group relative overflow-hidden rounded-md">

                                    <img
                                        src={
                                            property.images[
                                            currentImages[property.id] || 0
                                            ]
                                        }
                                        alt={property.title}
                                        className="propertyListingsSection-cardImage w-full h-[320px] object-cover"
                                    />

                                    <button
                                        onClick={() =>
                                            prevImage(property.id, property.images.length)
                                        }
                                        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2
                                        opacity-0 group-hover:opacity-100
                                        transition-all duration-300
                                        bg-white/90 hover:bg-white
                                        shadow-lg
                                        w-11 h-11
                                        rounded-full
                                        flex items-center justify-center"
                                        >
                                        <ChevronLeft size={20} />
                                    </button>

                                    <button
                                        onClick={() =>
                                            nextImage(property.id, property.images.length)
                                        }
                                        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2
                                        opacity-0 group-hover:opacity-100
                                        transition-all duration-300
                                        bg-white/90 hover:bg-white
                                        shadow-lg
                                        w-11 h-11
                                        rounded-full
                                        flex items-center justify-center"
                                        >
                                        <ChevronRight size={20} />
                                    </button>

                                    <span className="propertyListingsSection-featuredBadge absolute top-5 right-5 bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
                                        FEATURED
                                    </span>

                                    </div>

                                    <div className="propertyListingsSection-cardContent mt-5">
                                    <h4 className="propertyListingsSection-cardTitle text-[17px] font-semibold">
                                        {property.title}
                                    </h4>

                                    <p className="propertyListingsSection-cardMeta text-gray-500">
                                        {property.details}
                                    </p>

                                    <p className="propertyListingsSection-cardPrice text-[20px] font-bold mt-3">
                                        {property.price}
                                    </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PropertySearchSectionListings;