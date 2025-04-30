import CaseButton from "../components/CaseButton.jsx";
import TestimonialButton from "../buttons/TestimonialButton.jsx";


const TestimonialRight = ({brand, desc, case1, case2}) => {
  
  return (
    <div className="w-full h-fit flex gap-[36px] flex-wrap justify-center">

      <div className="w-[444px] h-fit ">

        <div>
          <p className="smif text-[24px] !mb-2 !mt-[40px]">{brand}</p>
          <p className="sf text-[18px] text-[var(--gray1)] leading-[130%] max-w-[444px]">{desc}</p>
        </div>

        <div className="flex flex-row flex-wrap gap-2 !mt-[24px]">
          <CaseButton title={case1}/>
          <CaseButton title={case2}/>
        </div>

      </div>


      <div className="w-[520px] h-fit flex flex-col gap-2">

        <div className="flex flex-row gap-2">
          <TestimonialButton title="Testimonial" src="images/svgs/Star.svg"/>
          <TestimonialButton title="Website" src="images/svgs/Star.svg"/>
        </div>

        <div className="w-[520] aspect-video bg-red-500/20">

        </div>

      </div>



    </div>
  );
};

export default TestimonialRight;