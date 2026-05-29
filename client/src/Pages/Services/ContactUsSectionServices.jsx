import React from "react";

const ContactUsSectionServices = () => {
    return (
        <section
            className="contactUsSectionServices-wrapper relative w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                "url('https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-services-contact-bg-1920x1280.jpg')",
            }}
            >
                
            <div className="contactUsSectionServices-overlay absolute inset-0 bg-black/50"></div>

            <div className="contactUsSectionServices-container relative z-10 w-[90%] max-w-7xl mx-auto flex flex-col min-[992px]:flex-row items-center justify-between gap-16 py-20">
                
                <div className="contactUsSectionServices-content max-w-[700px] min-[992px]:max-w-[420px] text-white">
                    <h2 className="contactUsSectionServices-heading text-4xl font-bold leading-tight mb-6">
                        When you're ready for a change
                    </h2>

                    <p className="contactUsSectionServices-description text-lg md:text-xl text-gray-300">
                        When you're ready for a change
                    </p>
                </div>

                <div className="contactUsSectionServices-formWrapper w-full max-w-[700px] min-[992px]:max-w-[400px] min-[1200px]:max-w-[560px] max-w-lg bg-black rounded-lg p-8 md:p-12">
                
                    <h3 className="contactUsSectionServices-formTitle text-white text-4xl font-bold mb-3">
                        Say hello
                    </h3>

                    <p className="contactUsSectionServices-formSubtitle text-gray-400 text-lg mb-8">
                        Tell us how we can guide you.
                    </p>

                    <form className="contactUsSectionServices-form flex flex-col gap-6">
                        
                        <div className="contactUsSectionServices-inputRow grid grid-cols-1 min-[576px]:grid-cols-2 gap-5">
                        
                        <input
                            type="text"
                            placeholder="Your name"
                            className="contactUsSectionServices-input w-full bg-[#2F2F2F] text-white px-5 py-4 rounded-md outline-none border border-transparent focus:border-blue-500"
                        />

                        <input
                            type="tel"
                            placeholder="Your number"
                            className="contactUsSectionServices-input w-full bg-[#2F2F2F] text-white px-5 py-4 rounded-md outline-none border border-transparent focus:border-blue-500"
                        />
                        </div>

                        <input
                        type="email"
                        placeholder="Your email"
                        className="contactUsSectionServices-input w-full bg-[#2F2F2F] text-white px-5 py-4 rounded-md outline-none border border-transparent focus:border-blue-500"
                        />

                        <textarea
                        rows="3"
                        placeholder="Type your message..."
                        className="contactUsSectionServices-textarea w-full bg-[#2F2F2F] text-white px-5 py-4 rounded-md outline-none resize-none border border-transparent focus:border-blue-500"
                        ></textarea>

                        <button
                        type="submit"
                        className="contactUsSectionServices-button cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-md transition-all duration-300"
                        >
                        SEND MESSAGE
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactUsSectionServices;