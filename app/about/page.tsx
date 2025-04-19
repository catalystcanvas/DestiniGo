// app/about/page.js or pages/about.js (depending on your folder structure)

import AboutUs from "@/app/component/about/AboutUs_top";
import Header from "@/app/component/Header";
import Footer from "@/app/component/footer";
import ImpactSection from "@/app/component/about/AboutUs_middle";
import Services from "@/app/component/Services";
import GalleryAndCertificates from "@/app/component/about/AboutUs_bottom";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <ImpactSection />
      <GalleryAndCertificates />
      <Footer />
    </div>
  );
};

export default AboutPage;
