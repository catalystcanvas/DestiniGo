// "use client";

import Header from "@/app/component/Header"
import Footer from "@/app/component/footer"
import ExamsInfo from "@/app/component/exam/exam_info"



const exam_page = () => {
  return (
    <div>
      <Header />
      <ExamsInfo />
      <Footer />
    </div>
  );
};

export default exam_page;