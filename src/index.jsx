import Hero from "./assets/sections/Hero"
import Bento from "./assets/sections/Bento"
import FlyingCircle from "./assets/components/FlyingCircle"
import Testimonials from "./assets/sections/Testimonials";

function HomePage() {

  return (
    <>

      <FlyingCircle/>


      <div className="min-h-screen flex justify-center flex-col">
    
        <Hero/>
        <Bento/>
        <Testimonials/>
        
      </div>

      <div className="h-[300vh]"/>
    </>
  );

}

export default HomePage;
