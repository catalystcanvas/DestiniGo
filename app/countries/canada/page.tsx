// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/canada/hero_can"
import StudyInCanada from "@/app/component/canada/mid_can"
import StudyCanadaProcess from "@/app/component/canada/bottom_can"
import ImpactSection_canada from "@/app/component/canada/can_top_universities"


const canada_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInCanada />
      <StudyCanadaProcess />
      <ImpactSection_canada />
      <Footer />
    </div>
  );
};

export default canada_page;