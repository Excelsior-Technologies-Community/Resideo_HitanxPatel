import React from "react";

const AboutHeader = () => {
  return (
    <section className="aboutHeader-main relative w-full h-[500px] overflow-hidden">
      
      <img
        src="https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-about-hero.jpg"
        alt="About Background"
        className="aboutHeader-image absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="aboutHeader-overlay absolute inset-0 bg-black/55"></div>

      <div className="aboutHeader-content relative z-10 h-full flex items-end pb-20">
        <div className="aboutHeader-container max-w-[1200px] mx-auto px-6 w-full">

            <h1 className="aboutHeader-title text-white text-3xl md:text-5xl font-bold leading-none">
                About Us
            </h1>

            <p className="aboutHeader-subtitle mt-4 text-white/60 text-sm md:text-lg font-medium">
                A real estate company with a purpose.
            </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHeader;