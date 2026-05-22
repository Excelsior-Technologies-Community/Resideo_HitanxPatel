import Navbar from "../../components/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import FutureHomeSection from "./FutureHomeSection";
import NeighborhoodsSectionHome from "./NeighborhoodsSectionHome";
import TestimonialHome from "./TestimonialHome";
import FeaturesShowcaseHome from "./FeaturesShowcaseHome";

function Home() {

  return (

    <div>
        <Navbar transparent={true} />
        <HomeHeroSection />
        <FutureHomeSection />
        <NeighborhoodsSectionHome />
        <TestimonialHome />
        <FeaturesShowcaseHome />
    </div>

  );
}

export default Home;