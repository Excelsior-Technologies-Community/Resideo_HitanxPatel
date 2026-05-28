import React from "react";

const ServicesOverviewSection = () => {
    return (
        <section className="servicesOverviewSection-wrapper bg-[#ececec] py-16 min-[767px]:py-20 min-[992px]:py-28">
        <div className="servicesOverviewSection-container w-[90%] min-[767px]:w-[70%] min-[992px]:w-[90%] max-w-7xl mx-auto">
            
            <h2 className="servicesOverviewSection-heading text-[#1f2d3d] text-4xl min-[767px]:text-5xl font-bold mb-14 min-[767px]:mb-20">
            Services
            </h2>

            <div className="servicesOverviewSection-content flex flex-col min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-between gap-10">

                <div className="servicesOverviewSection-mobileContent block min-[992px]:hidden">

                    <h2 className="servicesOverviewSection-mobileTitle text-[#1f2d3d] text-3xl min-[767px]:text-4xl font-bold leading-tight mb-8">
                        A tech company reinventing the space
                    </h2>

                    <p className="servicesOverviewSection-mobileDescription text-gray-500 text-lg leading-9">
                        To lead the industry requires the smartest tools built by the
                        brightest minds across engineering, design, and strategy. Through
                        our proprietary platform, Resideo is changing how agents and
                        clients navigate the process of finding or selling a home.
                    </p>

                </div>

                <div className="servicesOverviewSection-left relative w-full min-[992px]:w-[48%]">

                    <div className="servicesOverviewSection-imageWrapper w-full min-[1200px]:w-[500px] min-[992px]:w-[450px] min-[767px]:w-[500px]">
                        <img
                            src="https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-hero-800x600.jpg"
                            alt="Building"
                            className="servicesOverviewSection-image w-full h-[380px] min-[767px]:h-[500px] object-cover"
                        />
                    </div>

                    <div className="servicesOverviewSection-card bg-black text-white p-8 min-[767px]:p-10 w-full min-[1200px]:max-w-[400px] min-[992px]:max-w-[290px] min-[767px]:max-w-[450px] relative min-[767px]:absolute min-[767px]:bottom-[-80px] min-[767px]:right-[-60px] mt-0 min-[767px]:mt-0">
                        
                        <div className="servicesOverviewSection-cardIcon flex justify-center mb-6">
                            <img
                            src="https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/plan-business-white-200x200.png"
                            alt="Icon"
                            className="servicesOverviewSection-icon w-14 h-14 object-contain"
                            />
                        </div>

                        <h3 className="servicesOverviewSection-cardHeading text-3xl min-[992px]:text-2xl font-bold text-center leading-snug mb-6">
                            A real estate company
                        </h3>

                        <p className="servicesOverviewSection-cardText text-gray-400 text-center leading-8 text-lg min-[992px]:text-base">
                            We are building the first modern real estate platform, pairing
                            the industry’s top talent with technology to make the search and
                            sell experience intelligent and seamless.
                        </p>
                    </div>
                </div>

                <div className="servicesOverviewSection-right w-full min-[992px]:w-[42%]">

                    <h2 className="servicesOverviewSection-title hidden min-[992px]:block text-[#1f2d3d] text-4xl min-[767px]:text-5xl min-[992px]:text-[37px] font-bold leading-tight mb-8">
                    A tech company reinventing the space
                    </h2>

                    <p className="servicesOverviewSection-description hidden min-[992px]:block text-gray-500 text-lg leading-9 mb-12 max-w-xl">
                    To lead the industry requires the smartest tools built by the
                    brightest minds across engineering, design, and strategy. Through
                    our proprietary platform, Resideo is changing how agents and
                    clients navigate the process of finding or selling a home.
                    </p>

                    <button className="servicesOverviewSection-buttonGroup group flex items-center gap-6 min-[767px]:mt-20 min-[992px]:mt-10 text-blue-600 font-bold uppercase tracking-wide cursor-pointer">
                    
                    <span className="servicesOverviewSection-buttonText">
                        Browse Our Properties
                    </span>

                    <span className="servicesOverviewSection-buttonLine w-14 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-24"></span>

                    </button>

                </div>
            </div>
        </div>
        </section>
    );
};

export default ServicesOverviewSection;