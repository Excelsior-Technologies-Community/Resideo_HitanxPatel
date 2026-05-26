import { useState } from "react";
import { Play } from "lucide-react";

const AboutVideoHeroSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="aboutVideoHeroSection-wrapper relative w-full h-screen overflow-hidden">

            <div
                className="aboutVideoHeroSection-bg absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage:
                    "url('https://pixelprime.co/themes/resideo-wp/demo-10/wp-content/uploads/2021/07/d10-about-video-bg-1920x1280.jpg')",
                }}
            >
            </div>

            <div className="aboutVideoHeroSection-overlay absolute inset-0 bg-black/30"></div>

            <div className="aboutVideoHeroSection-content relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pb-20">
                
                <h1 className="aboutVideoHeroSection-heading text-white font-bold text-3xl leading-tight max-w-[900px]">
                A tech company reinventing the space
                </h1>

                <p className="aboutVideoHeroSection-description text-gray-200 mt-5 text-base max-w-[850px]">
                The smartest tools built by the brightest minds across engineering,
                design, and strategy.
                </p>

                <button
                onClick={() => setShowVideo(true)}
                className="aboutVideoHeroSection-playButton mt-12 w-24 h-24 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 duration-300"
                style={{ cursor: "pointer" }}
                >
                <div className="aboutVideoHeroSection-playIconWrapper w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Play
                    fill="black"
                    size={28}
                    className="aboutVideoHeroSection-playIcon ml-1"
                    />
                </div>
                </button>
            </div>

            {showVideo && (
                <div className="aboutVideoHeroSection-videoModal fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
                
                    <button
                        onClick={() => setShowVideo(false)}
                        className="aboutVideoHeroSection-closeButton absolute top-6 right-6 text-white text-4xl"
                    style={{ cursor: "pointer" }}
                    >
                        ×
                    </button>

                    <div className="aboutVideoHeroSection-videoWrapper w-full max-w-5xl aspect-video">
                        <iframe
                        className="aboutVideoHeroSection-iframe w-full h-full rounded-2xl"
                        src="https://www.youtube.com/embed/cBW0uh3LE5w?autoplay=1"
                        title="Youtube Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};  

export default AboutVideoHeroSection;