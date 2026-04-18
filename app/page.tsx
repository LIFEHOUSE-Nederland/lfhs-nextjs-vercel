import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceInfo from "@/components/ServiceInfo";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import CommunityLinks from "@/components/CommunityLinks";
import Giving from "@/components/Giving";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ServiceInfo />
        <About />
        <Leadership />
        <CommunityLinks />
        <Giving />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
