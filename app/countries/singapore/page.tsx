// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner from "@/app/component/singapore/hero_sing"
import StudyInSingapore from "@/app/component/singapore/mid_sing"
import StudySingaporeProcess from "@/app/component/singapore/bottom_sing"
import ImpactSection_singapore from "@/app/component/singapore/sing_top_universities"


const australia_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <StudyInSingapore />
      <StudySingaporeProcess />
      <ImpactSection_singapore />
      <Footer />
    </div>
  );
};

export default australia_page;