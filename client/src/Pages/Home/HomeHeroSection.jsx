import React from "react";

const HomeHeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/Videos/home-hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-20 flex h-full justify-center text-center px-4 pt-40 min-[992px]:items-center min-[992px]:pt-0">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            When you're ready for a change
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-lg">
            Whether you're buying, selling or renting, we can help you move forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;