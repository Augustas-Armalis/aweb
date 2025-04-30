import FlyInTitle from "../components/FlyInTitle.jsx";
import TestimonialRight from "../components/TestimonialRight.jsx";

const Testimonials = () => {
  
  return (
    <div className="flex items-center justify-center w-full !mt-[192px] max-[548px]:!mt-[124px]">
      <div className="w-[1000px] relative flex flex-col items-center gap-[64px] !mx-8 h-fit max-[1064px]:w-full max-[548px]:!mx-4">
        <FlyInTitle title="See our recent work"/>

        <TestimonialRight brand="Sprout" desc="Built multiple sites which generate more than 6-figs a year. Helping till this day with new projects and business growth" case1="Enterprise" case2="Venture Studio"/>

        
        
      </div>
    </div>
  );
};

export default Testimonials;