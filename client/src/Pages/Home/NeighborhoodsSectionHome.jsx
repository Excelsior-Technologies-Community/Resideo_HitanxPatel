import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const neighborhoodsDataHome = [
  {
    id: 1,
    title: "Marina District",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sea Cliff",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Noe Valley",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sunset District",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Pacific Heights",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Mission District",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
];

const NeighborhoodsSectionHome = () => {
  const [currentIndexHome, setCurrentIndexHome] = useState(0);

  const nextSlideHome = () => {
    if (currentIndexHome < neighborhoodsDataHome.length - 3) {
      setCurrentIndexHome(currentIndexHome + 1);
    }
  };

  const prevSlideHome = () => {
    if (currentIndexHome > 0) {
      setCurrentIndexHome(currentIndexHome - 1);
    }
  };

  return (
    <section className="NeighborhoodsSectionHome-section bg-[#f3f3f3] py-20 overflow-hidden">

      {/* file name = NeighborhoodsSectionHome-container */}
      <div className="NeighborhoodsSectionHome-container max-w-[1700px] mx-auto px-5">

        <div className="NeighborhoodsSectionHome-header text-center mb-14">

          <h2 className="NeighborhoodsSectionHome-heading text-3xl font-bold text-[#1d1d1d] mb-4">
            Explore Neighborhoods
          </h2>

          <p className="NeighborhoodsSectionHome-subHeading text-gray-500 text-lg">
            Browse our comprehensive neighborhood listings.
          </p>
        </div>

        {/* file name = NeighborhoodsSectionHome-sliderWrapper */}
        <div className="NeighborhoodsSectionHome-sliderWrapper relative">

          {currentIndexHome > 0 && (
            <button
                onClick={prevSlideHome}
                className="NeighborhoodsSectionHome-leftArrow group absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white w-15 h-15 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
                >
                <ArrowLeft
                    size={32}
                    strokeWidth={1.5}
                    className="translate-x-0 group-hover:-translate-x-14 group-hover:opacity-0 transition-all duration-300"
                />

                <ArrowLeft
                    size={32}
                    strokeWidth={1.5}
                    className="absolute translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                />
            </button>
          )}

          {currentIndexHome < neighborhoodsDataHome.length - 3 && (
            <button
                onClick={nextSlideHome}
                className="NeighborhoodsSectionHome-rightArrow group absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white w-15 h-15 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
                >
                <ArrowRight
                    size={32}
                    strokeWidth={1.5}
                    className="translate-x-0 group-hover:translate-x-14 group-hover:opacity-0 transition-all duration-300"
                />

                <ArrowRight
                    size={32}
                    strokeWidth={1.5}
                    className="absolute -translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                />
            </button>
          )}

          <div className="NeighborhoodsSectionHome-slider overflow-hidden">

            <div
              className="NeighborhoodsSectionHome-track flex duration-500"
              style={{
                transform: `translateX(-${
                  window.innerWidth >= 900
                    ? (currentIndexHome * 100) / 3
                    : window.innerWidth >= 600
                    ? (currentIndexHome * 100) / 2
                    : currentIndexHome * 100
                }%)`,
              }}
            >
              {neighborhoodsDataHome.map((item) => (
                <div
                  key={item.id}
                  className="NeighborhoodsSectionHome-card w-full min-[600px]:w-1/2 min-[900px]:w-1/3 flex-shrink-0 group cursor-pointer px-4"
                >

                  <div className="NeighborhoodsSectionHome-imageWrapper relative overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="NeighborhoodsSectionHome-image w-full h-[340px] object-cover group-hover:scale-110 duration-500"
                    />

                    <div className="NeighborhoodsSectionHome-propertyBadge absolute left-6 bottom-6 bg-black text-white text-sm font-semibold px-5 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      2 PROPERTIES
                    </div>
                  </div>

                  <div className="NeighborhoodsSectionHome-content">

                    <h3 className="NeighborhoodsSectionHome-title text-2xl font-bold text-[#2d2d2d]">
                      {item.title}
                    </h3>

                    <p className="NeighborhoodsSectionHome-location text-gray-500 text-sm">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="NeighborhoodsSectionHome-buttonWrapper flex justify-center mt-14">

            <button className="NeighborhoodsSectionHome-button group relative text-blue-600 font-bold text-1xl uppercase cursor-pointer">

                VIEW PROPERTIES

                <span className="NeighborhoodsSectionHome-buttonLine absolute left-full ml-6 top-1/2 -translate-y-1/2 h-[2px] bg-blue-600 transition-all duration-300 w-16 group-hover:w-28"></span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSectionHome;