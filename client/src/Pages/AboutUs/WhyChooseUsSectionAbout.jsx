import React from "react";

const whyChooseUsSectionAboutCards = [
    {
        id: 1,
        image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        iconImage:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/services-1-white-200x200.png",
        title: "Buy a home",
        description:
        "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
    },
    {
        id: 2,
        image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
        iconImage:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/services-3-white-200x200.png",
        title: "Sell a home",
        description:
        "Whether you get a cash offer through Resideo or choose to sell traditionally, we can help you navigate a successful sale.",
    },
    {
        id: 3,
        image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
        iconImage:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/services-2-white-200x200.png",
        title: "Rent a home",
        description:
        "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    },
];

const WhyChooseUsSectionAbout = () => {
    return (
        <section className="whyChooseUsSectionAbout-wrapper bg-[#f3f3f3] py-20 px-5">

            <div className="whyChooseUsSectionAbout-heading text-center mb-14">

                <h2 className="whyChooseUsSectionAbout-title text-4xl font-bold text-black">
                Why Choose Us
                </h2>

                <p className="whyChooseUsSectionAbout-subtitle text-gray-500 mt-3 text-lg">
                We offer perfect real estate services.
                </p>

            </div>

            {/* Cards */}
            <div className="whyChooseUsSectionAbout-cardContainer max-w-full min-[767px]:max-w-3xl min-[992px]:max-w-6xl mx-auto grid grid-cols-1 min-[767px]:grid-cols-2 min-[992px]:grid-cols-3 gap-8">

                {whyChooseUsSectionAboutCards.map((card) => (
                    <div
                        key={card.id}
                        className={`
                            whyChooseUsSectionAbout-card
                            relative
                            overflow-hidden
                            rounded-xl
                            group
                            h-[520px]
                            transition-all
                            duration-200

                            ${card.id === 3
                                ? "min-[767px]:translate-x-1/2 min-[992px]:translate-x-0"
                                : ""
                            }
                        `}
                        
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();

                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            // CARD TILT
                            const rotateY = ((x / rect.width) - 0.5) * 10;
                            const rotateX = ((y / rect.height) - 0.5) * -10;

                            card.style.transform = `
                            perspective(1000px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            `;

                            // CONTENT MOVE
                            const moveX = (x - rect.width / 2) / 20;
                            const moveY = (y - rect.height / 2) / 20;

                            const content = card.querySelector(
                            ".whyChooseUsSectionAbout-content"
                            );

                            content.style.transform = `
                            translate(${moveX}px, ${moveY}px)
                            `;
                        }}

                        onMouseLeave={(e) => {
                            const card = e.currentTarget;

                            const content = card.querySelector(
                            ".whyChooseUsSectionAbout-content"
                            );

                            card.style.transform = `
                            perspective(1000px)
                            rotateX(0deg)
                            rotateY(0deg)
                            `;

                            content.style.transform = `
                            translate(0px, 0px)
                            `;
                        }}
                    >

                        <img
                        src={card.image}
                        alt={card.title}
                        className="whyChooseUsSectionAbout-cardImage w-full h-full object-cover transition-all duration-500"
                        />

                        <div className="whyChooseUsSectionAbout-overlay absolute inset-0 bg-black/45"></div>

                        <div className="whyChooseUsSectionAbout-content absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8">
                            

                            <img
                                src={card.iconImage}
                                alt="icon"
                                className="whyChooseUsSectionAbout-iconImage w-15 h-15 object-contain mb-6"
                            />

                            <h3 className="whyChooseUsSectionAbout-cardTitle text-white text-2xl font-bold mb-4 mt-6">
                                {card.title}
                            </h3>

                            <p className="whyChooseUsSectionAbout-cardDescription text-white/70 text-sm max-w-sm">
                                {card.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUsSectionAbout;