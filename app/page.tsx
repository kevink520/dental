import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
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
