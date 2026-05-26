import React, { useState } from "react";

const FeatureSectionAbout = () => {

  const [openItem, setOpenItem] = useState(2);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const featureData = [
    {
      id: 1,
      title: "Find your future home",
      description:
        "With over 1 million+ homes for sale available on the website, Resideo can match you with a house you will want to call home.",
    },
    {
      id: 2,
      title: "Experienced agents",
      description:
        "With filters and custom keyword search, Resideo can help you easily find a home or apartment for rent that you'll love.",
    },
    {
      id: 3,
      title: "Buy or rent homes",
      description:
        "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
    },
    {
      id: 4,
      title: "List your own property",
      description:
        "With over 1 million+ homes for sale available on the website, Resideo can match you with a house you will want to call home.",
    },
  ];

  return (
    <section className="featureSectionAbout-bg bg-[#f7f7f7] py-24">

      <div className="featureSectionAbout-container max-w-[1200px] mx-auto px-6 pl-10 pr-5 md:px-6">

        <div className="featureSectionAbout-wrapper flex flex-col md:flex-row justify-between gap-20">

          <div className="featureSectionAbout-left flex-1">

            <h2 className="featureSectionAbout-heading text-[32px] leading-[1.3] font-bold text-[#1f2937] max-w-[430px]">
              We are building the first modern real estate platform.
            </h2>

          </div>

          <div className="featureSectionAbout-right flex-1 flex flex-col gap-7">

            {featureData.map((item) => (
              <div
                key={item.id}
                className="featureSectionAbout-item"
              >

                <div
                    onClick={() => toggleItem(item.id)}
                    className="featureSectionAbout-title flex items-center gap-4 cursor-pointer group"
                    >

                    <span className="featureSectionAbout-icon text-[30px] font-bold text-[#1f2937] leading-none transition-all duration-300 group-hover:text-gray-400">
                        {openItem === item.id ? "−" : "+"}
                    </span>

                    <h3 className="featureSectionAbout-text text-[20px] font-bold text-[#1f2937] transition-all duration-300 group-hover:text-gray-400">
                        {item.title}
                    </h3>

                </div>

                {openItem === item.id && (
                  <p className="featureSectionAbout-description mt-4 ml-[52px] text-[16px] leading-[1.5] text-gray-500 max-w-[500px]">
                    {item.description}
                  </p>
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionAbout;