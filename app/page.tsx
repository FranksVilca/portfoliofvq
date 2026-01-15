import AboutMe from "@/components/aboutMe";
import Contactanos from "@/components/contactanos";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import HeroBanner from "@/components/HeroBanner";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      <Navbar />
      < HeroBanner />
      < AboutMe />
      < Services />
      < Portfolio />
      < Contactanos />
      < Footer />
    </div>
  );
}
