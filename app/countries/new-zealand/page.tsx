// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import HeroBanner_newzealand from "@/app/component/newzealand/hero_nez"
import StudyInNewZealand from "@/app/component/newzealand/mid_nez"
import StudyNewZealandProcess from "@/app/component/newzealand/bottom_nez"
import ImpactSection_newzealand from "@/app/component/newzealand/nez_top_universities"


const newzealand_page = () => {
  return (
    <div>
      <Header />
      <HeroBanner_newzealand />
      <StudyInNewZealand />
      <StudyNewZealandProcess />
      <ImpactSection_newzealand />
      <Footer />
    </div>
  );
};

export default newzealand_page;