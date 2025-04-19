// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/UK/hero_uk"
import StudyInUK from "@/app/component/UK/mid_uk"
import StudyUKProcess from "@/app/component/UK/bottom_uk"
import ImpactSection_uk from "@/app/component/UK/uk_top_universities"


const australia_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInUK />
      <StudyUKProcess />
      <ImpactSection_uk />
      <Footer />
    </div>
  );
};

export default australia_page;