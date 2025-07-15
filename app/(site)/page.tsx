import HeroBanner from "@/containers/site/HeroBanner";
import AboutUsComponent from "@/containers/site/AboutUsConponent";
import Testimonials from "@/containers/site/Testimonials";
import ServicesBanner from "@/containers/site/ServicesBanner";
import ServicesCarusel from "@/containers/site/ServicesCarusel";
import ContactUsComponent from "@/containers/site/ContactUsComponent";
import FAQComponent from "@/containers/site/FAQComponents";
export default function Page() {
  return (
    <main>
      <HeroBanner />
      <AboutUsComponent />
      <Testimonials />
      <ServicesBanner />
      <ServicesCarusel />
      <ContactUsComponent />
      <FAQComponent />
    </main>
  );
}
