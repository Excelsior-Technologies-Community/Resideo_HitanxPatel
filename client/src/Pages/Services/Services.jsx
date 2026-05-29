import Navbar from "../../components/Navbar";
import ServicesOverviewSection from "./ServicesOverviewSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ContactUsSectionServices from "./ContactUsSectionServices";
import Footer from "../../components/Footer";

function Services() {

  return (

    <div>
        <Navbar/>
        <ServicesOverviewSection />
        <WhyChooseUsSection />
        <ContactUsSectionServices />
        <Footer />
    </div>

  );
}

export default Services;