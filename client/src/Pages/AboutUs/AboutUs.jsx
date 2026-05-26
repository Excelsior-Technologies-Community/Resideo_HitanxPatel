import Navbar from "../../components/Navbar";
import AboutHeader from "./AboutHeader";
import FeatureSectionAbout from "./FeatureSectionAbout";
import AboutVideoHeroSection from "./AboutVideoHeroSection";
import AboutStatusSection from "./AboutStatusSection";
// import Footer from "../../components/Footer";

function AboutUs() {

  return (

    <div>
        <Navbar transparent={true} />
        <AboutHeader />
        <FeatureSectionAbout />
        <AboutVideoHeroSection />
        <AboutStatusSection />
        {/* <Footer /> */}
    </div>

  );
}

export default AboutUs;