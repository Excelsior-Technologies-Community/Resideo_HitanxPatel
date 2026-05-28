const services = [
    {
        id: 1,
        image:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-1-blue-200x200.png",
        title: "Find your future home",
        description:
        "We help you find a new home by offering a smart real estate experience",
    },
    {
        id: 2,
        image:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-2-blue-200x200.png",
        title: "Experienced agents",
        description:
        "Find an experienced agent who knows your market best",
    },
    {
        id: 3,
        image:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-3-blue-200x200.png",
        title: "Buy or rent homes",
        description:
        "Millions of houses and apartments in your favourite cities",
    },
    {   
        id: 4,
        image:
        "https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-4-blue-200x200.png",
        title: "List your own property",
        description:
        "Sign up now and sell or rent your own properties",
    },
    ];

    export default function WhyChooseUsSection() {
    return (
        <section className="whyChooseUsSection-container bg-[#ededed] py-20 border-t border-gray-300">
        <div className="whyChooseUsSection-wrapper w-[90%] max-w-7xl mx-auto">

            <div className="whyChooseUsSection-content grid grid-cols-1 min-[768px]:grid-cols-2 gap-16">

                <div className="whyChooseUsSection-left">
                    <h2 className="whyChooseUsSection-heading text-3xl min-[767px]:text-4xl font-bold leading-tight text-[#1d1d1d] min-[768px]:max-w-md">
                    We are building the first modern real estate platform.
                    </h2>
                </div>

                <div className="whyChooseUsSection-services grid grid-cols-1 min-[576px]:grid-cols-2 gap-x-16 gap-y-14">

                    {services.map((service) => (
                    <div
                        key={service.id}
                        className="whyChooseUsSection-serviceCard"
                    >

                        <img
                        src={service.image}
                        alt={service.title}
                        className="whyChooseUsSection-icon w-[80px] h-[80px] object-contain mb-5"
                        />

                        <h3 className="whyChooseUsSection-cardTitle text-2xl font-bold text-[#1d1d1d] mb-3">
                        {service.title}
                        </h3>

                        <p className="whyChooseUsSection-cardDescription text-gray-500 text-lg">
                        {service.description}
                        </p>

                    </div>
                    ))}

                </div>
            </div>
        </div>
        </section>
    );
    }