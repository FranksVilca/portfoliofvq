import AboutMe from "@/components/aboutMe";
import Contactanos from "@/components/contactanos";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import HeroBanner from "@/components/HeroBanner";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {

  return (
    <div>
      < Navbar />
      < HeroBanner
        id="home" />
      < AboutMe
        id="about" />
      < Services
        id="services" />
      < Portfolio
        id="portfolio" />
      < Contactanos
        id="contact" />
      < Footer />
    </div>
  );
}
