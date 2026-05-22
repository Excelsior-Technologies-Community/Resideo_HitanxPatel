import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Susanne Weil",
    review:
      "And it’s no wonder Resideo has shaken things up: As anyone who’s ever tried to rent or buy property in Cambridge knows, the experience is loaded with pain points.",
    image:
      "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-home-slider-1-1920x1280.jpg",
  },
   {
    id: 2,
    name: "Rebecca Eason",
    review:
      "And it’s no wonder Resideo has shaken things up: As anyone who’s ever tried to rent or buy property in Washington knows, the experience is loaded with pain points.",
    image:
      "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-6-1920x1280.jpg",
  },
  {
    id: 3,
    name: "Kenneth Spiers",
    review:
      "While Resideo functions like a traditional broker, the company's promise is using technology to reduce the time and friction of buying and selling house or apartment.",
    image:
      "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2020/07/office-5-1920x1280.jpg",
  },
];

const TestimonialHome = () => {
    const [activeTestimonialHome, setActiveTestimonialHome] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonialHome((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="TestimonialHome-main relative w-full h-screen max-[1333px]:h-[70vh] overflow-hidden">
        
        <img
            src={testimonials[activeTestimonialHome].image}
            alt="Office Background"
            className="TestimonialHome-bgImage absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="TestimonialHome-overlay absolute inset-0 bg-black/50"></div>

        <div className="TestimonialHome-content relative z-10 flex items-center justify-center h-full px-5">
            
            {/* <div className="TestimonialHome-card bg-black w-full max-w-[330px] p-8 md:p-10"> */}
            <div className="TestimonialHome-card bg-black w-full max-w-[330px] max-[767px]:max-w-[320px] min-h-[320px] max-[767px]:min-h-[300px] p-8 md:p-10">
            
                <h2 className="TestimonialHome-name text-white text-3xl md:text-3xl font-bold mb-6">
                    {testimonials[activeTestimonialHome].name}
                </h2>

                <p className="TestimonialHome-review text-gray-300 text-base ">
                    "{testimonials[activeTestimonialHome].review}"
                </p>

                <div className="TestimonialHome-dots flex items-center gap-5 mt-10">
                    
                    {testimonials.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTestimonialHome(index)}
                        className={`TestimonialHome-dotButton rounded-full duration-300 cursor-pointer ${
                        activeTestimonialHome === index
                            ? "w-4 h-4 border border-white"
                            : "w-2.5 h-2.5 bg-white"
                        }`}
                    ></button>
                    ))}

                </div>

            </div>
        </div>
        </section>
    );
};

export default TestimonialHome;