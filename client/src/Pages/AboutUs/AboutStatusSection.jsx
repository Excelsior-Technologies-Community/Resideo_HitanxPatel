import React from "react";

const AboutStatusSection = () => {
    return (
        <section className="aboutStatusSection-container bg-black text-white py-24 px-6 md:px-16 lg:px-24">
        
        <div className="aboutStatusSection-heading mb-20">
            <h2 className="aboutStatusSection-title text-3xl font-bold mb-4">
            Real Estate by the Numbers
            </h2>

            <p className="aboutStatusSection-subtitle text-gray-400 text-base">
            In 2021, things look like this:
            </p>
        </div>

        <div className="aboutStatusSection-grid grid grid-cols-1 min-[576px]:grid-cols-3 gap-14">
            
            <div className="aboutStatusSection-card">
                <h3 className="aboutStatusSection-number text-6xl md:text-7xl font-bold mb-4">
                    195k
                </h3>

                <h4 className="aboutStatusSection-label text-2xl font-semibold mb-4">
                    Property value
                </h4>

                <p className="aboutStatusSection-description text-gray-400 text-lg">
                    Median US property value in $
                </p>
            </div>

            <div className="aboutStatusSection-card">
                <h3 className="aboutStatusSection-number text-6xl md:text-7xl font-bold mb-4">
                    3000+
                </h3>

                <h4 className="aboutStatusSection-label text-2xl font-semibold mb-4">
                    Property taxes
                </h4>

                <p className="aboutStatusSection-description text-gray-400 text-lg">
                    Average property taxes in $
                </p>
            </div>

            <div className="aboutStatusSection-card">
                <h3 className="aboutStatusSection-number text-6xl md:text-7xl font-bold mb-4">
                    63%
                </h3>

                <h4 className="aboutStatusSection-label text-2xl font-semibold mb-4">
                    Home ownership
                </h4>

                <p className="aboutStatusSection-description text-gray-400 text-lg">
                    Percentage of home ownership vs. renting
                </p>
            </div>

        </div>
        </section>
    );
};

export default AboutStatusSection;