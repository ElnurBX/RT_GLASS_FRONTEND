"use client";
import AboutUsComponent from "@/components/site/Home/AboutUsConponent";
import ContactUsComponent from "@/components/site/Home/ContactUsComponent";
import FAQComponent from "@/components/site/Home/FAQComponents";
import HeroBanner from "@/components/site/Home/HeroBanner";
import ServicesBanner from "@/components/site/Home/ServicesBanner";
import ServicesCarusel from "@/components/site/Home/ServicesCarusel";
import Testimonials from "@/components/site/Home/Testimonials";
// import Test from "@/components/site/test/test";



export default function HomePage() {
  return <main>
    <HeroBanner />
    <AboutUsComponent />
    <Testimonials />
    <ServicesBanner />
    <ServicesCarusel/>
    <ContactUsComponent/>
    <FAQComponent  />
  
  </main>;
}
