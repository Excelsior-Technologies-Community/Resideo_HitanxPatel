import Navbar from "../../components/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import FutureHomeSection from "./FutureHomeSection";
import NeighborhoodsSectionHome from "./NeighborhoodsSectionHome";

function Home() {

  return (

    <div>
        <Navbar transparent={true} />
        <HomeHeroSection />
        <FutureHomeSection />
        <NeighborhoodsSectionHome />
    </div>

  );
}

export default Home;