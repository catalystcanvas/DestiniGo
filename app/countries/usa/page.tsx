// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/USA/hero_usa"
import StudyInUSA from "@/app/component/USA/mid_usa"
import StudyUSAProcess from "@/app/component/USA/bottom_usa"
import ImpactSection_usa from "@/app/component/USA/usa_top_universities"


const australia_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInUSA />
      <StudyUSAProcess />
      <ImpactSection_usa />
      <Footer />
    </div>
  );
};

export default australia_page;