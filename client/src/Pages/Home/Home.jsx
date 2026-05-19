import Navbar from "../../components/Navbar";
import HomeHeroSection from "./HomeHeroSection";
import FutureHomeSection from "./FutureHomeSection";

function Home() {

  return (

    <div>
        <Navbar transparent={true} />
        <HomeHeroSection />
        <FutureHomeSection />
    </div>

  );
}

export default Home;