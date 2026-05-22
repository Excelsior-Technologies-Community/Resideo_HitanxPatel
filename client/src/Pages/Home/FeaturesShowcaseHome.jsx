import React, { useState } from "react";
import {
  House,
  KeyRound,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const featuresShowcaseHomeData = [
  {
    id: 1,
    title: "Buy a home",
    description:
      "With over 1 million+ homes for sale available on the website, Resideo can match you with a house you will want to call home.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    icon: <House size={42} strokeWidth={1.8} />,
  },

  {
    id: 2,
    title: "Rent a home",
    description:
      "Find premium rental properties in your favorite neighborhoods with flexible pricing and modern amenities.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    icon: <KeyRound size={42} strokeWidth={1.8} />,
  },

  {
    id: 3,
    title: "See neighborhoods",
    description:
      "Explore communities, nearby schools, cafes, transport, and local attractions before moving in.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
    icon: <MapPinned size={42} strokeWidth={1.8} />,
  },

  {
    id: 4,
    title: "Experienced agents",
    description:
      "Connect with trusted and experienced agents who guide you through every step of your property journey.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    icon: <BadgeCheck size={42} strokeWidth={1.8} />,
  },
];

const FeaturesShowcaseHome = () => {
  const [activeFeaturesShowcaseHome, setActiveFeaturesShowcaseHome] =
    useState(0);

  return (
    <section className="featuresShowcaseHome-section bg-[#f5f5f5] py-20 px-5">
      <div className="featuresShowcaseHome-container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="featuresShowcaseHome-left relative flex justify-center">
          
          <img
            src={
              featuresShowcaseHomeData[activeFeaturesShowcaseHome].image
            }
            alt=""
            className="featuresShowcaseHome-image w-full max-w-[450px] h-[470px] object-cover"
          />

          <div className="featuresShowcaseHome-card absolute bottom-[-50px] right-[-20px] bg-black text-white p-10 w-full max-w-[450px]">
            
            <div className="featuresShowcaseHome-icon text-5xl mb-8">
              {
                featuresShowcaseHomeData[
                  activeFeaturesShowcaseHome
                ].icon
              }
            </div>

            <p className="featuresShowcaseHome-description text-lg text-gray-300">
              {
                featuresShowcaseHomeData[
                  activeFeaturesShowcaseHome
                ].description
              }
            </p>

            <button className="featuresShowcaseHome-arrow mt-10 text-4xl hover:translate-x-2 duration-300">
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="featuresShowcaseHome-right lg:ml-10">
          
          <h2 className="featuresShowcaseHome-heading text-4xl md:text-3xl font-bold text-[#1f2937] leading-tight">
            See how Resideo can help
          </h2>

          <p className="featuresShowcaseHome-text text-gray-500 text-base mt-8 max-w-[400px]">
            With the solutions-driven mindset of a startup and the
            sophistication of a luxury brand, Resideo is the future of
            real estate.
          </p>

          <div className="featuresShowcaseHome-menu mt-16 flex flex-col gap-3">
            {featuresShowcaseHomeData.map((item, index) => (
              <button
                key={item.id}
                onClick={() =>
                  setActiveFeaturesShowcaseHome(index)
                }
                className={`featuresShowcaseHome-menuItem flex items-center gap-4 text-left text-xl font-bold duration-300 ${
                  activeFeaturesShowcaseHome === index
                    ? "text-[#1f2937]"
                    : "text-gray-400 hover:text-[#1f2937]"
                }`}
              >
                {activeFeaturesShowcaseHome === index && (
                  <span className="featuresShowcaseHome-line w-10 h-[2px] bg-[#1f2937]"></span>
                )}

                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcaseHome;