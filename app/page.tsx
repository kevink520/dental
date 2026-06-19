import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(120%_80%_at_50%_-10%,#f6f4f0_0%,#ebe8e1_60%,#e7e4dd_100%)] selection:bg-navy selection:text-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Nav />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <SiteFooter />
      </div>
    </div>
  );
}
