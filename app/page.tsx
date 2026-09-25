import Contact from "@/components/Contact";
import Dienst from "@/components/Dienst";
import Geven from "@/components/Geven";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OverOns from "@/components/OverOns";
import Socials from "@/components/Socials";
import Voorgangers from "@/components/Voorgangers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dienst />
        <OverOns />
        <Voorgangers />
        <Socials />
        <Geven />
        <Contact />
      </main>
    </>
  );
}
