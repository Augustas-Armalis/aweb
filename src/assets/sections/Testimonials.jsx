import FlyInTitle from "../components/FlyInTitle.jsx";
import SproutTestimonial from "../components/SproutTestimonial.jsx";
import FrostchangerTestimonial from "../components/FrostchangerTestimonial.jsx";
import CopywizTestimonial from "../components/CopywizTestimonial.jsx";

const Testimonials = () => {
  
  return (
    <div className="flex items-center justify-center w-full !mt-[192px]">
      <div className="w-[1000px] relative flex flex-col items-center gap-[92px] !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4 max-[1065px]:gap-[64px]">
        <FlyInTitle title="See our recent work"/>

        <SproutTestimonial brand="Sprout" desc="Built multiple sites which generate more than 6-figs a year. Helping till this day with new projects and business growth" case1="Enterprise" case2="Venture Studio"/>

        <FrostchangerTestimonial brand="FrostChanger" desc="Designed and coded 2 web apps. Working together for some time now and planning to do more big projects." case1="Enterprise" case2="SaaS"/>

        <CopywizTestimonial brand="CopyWiz" desc="Helped with branding. Created a fresh website design which stood out and attracted potential clients." case1="Web Design" case2="Agency"/>

      </div>
    </div>
  );
};

export default Testimonials;