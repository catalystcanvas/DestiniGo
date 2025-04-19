// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/europe/hero_eur"
import StudyInEurope from "@/app/component/europe/mid_eur"
import StudyEuropeProcess from "@/app/component/europe/bottom_eur"
import ImpactSection_europe from "@/app/component/europe/eur_top_universities"


const australia_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInEurope />
      <StudyEuropeProcess />
      <ImpactSection_europe />
      <Footer />
    </div>
  );
};

export default australia_page;