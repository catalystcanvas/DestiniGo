// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/autralia/hero_aus"
import StudyInAustralia from "@/app/component/autralia/mid_aus"
import StudyAustraliaProcess from "@/app/component/autralia/bottom_aus"
import ImpactSection from "@/app/component/autralia/aus_top_universities"


const australia_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInAustralia />
      <StudyAustraliaProcess />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default australia_page;