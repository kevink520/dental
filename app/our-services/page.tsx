import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ServicesHero from "@/components/services/ServicesHero";
import Marquee from "@/components/services/Marquee";
import ServiceIndex from "@/components/services/ServiceIndex";
import SignatureCare from "@/components/services/SignatureCare";
import VisitSteps from "@/components/services/VisitSteps";
import ComfortGrid from "@/components/services/ComfortGrid";
import Faq from "@/components/services/Faq";
import ServicesCta from "@/components/services/ServicesCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Services — Lumen Dent",
  description:
    "Orthodontics, cosmetic dentistry, restoration, pediatric care, hygiene and same-day emergency care — complete dental services under one roof at Lumen Dental.",
  openGraph: {
    title: "Our Services — Lumen Dent",
    description:
      "Six treatments, one team, and a plan that's always explained before it begins.",
    type: "website",
    images: [
      {
        url: "/images/lumendental.png",
        width: 1200,
        height: 630,
        alt: "Lumen Dental — Our Services",
      },
    ],
  },
};

export default function OurServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(120%_80%_at_50%_-10%,#f6f4f0_0%,#ebe8e1_60%,#e7e4dd_100%)] selection:bg-navy selection:text-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Nav />
        <ServicesHero />
        <Marquee />
        <ServiceIndex />
        <SignatureCare />
        <VisitSteps />
        <ComfortGrid />
        <Faq />
        <ServicesCta />
        <SiteFooter />
      </div>
    </div>
  );
}
