import Community from "@/components/Community";
import Complex from "@/components/Complex";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import MobileBar from "@/components/MobileBar";
import Overview from "@/components/Overview";
import Plans from "@/components/Plans";
import Register from "@/components/Register";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Location />
        <Complex />
        <Community />
        <Plans />
        <Faq />
        <Register />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
