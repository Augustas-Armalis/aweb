import Hero from "./assets/sections/hero"
import FlyingCircle from "./assets/components/FlyingCircle"

function HomePage() {

  return (
    <>

      <FlyingCircle/>


      <div className="min-h-[100vh] w-[100vw] flex justify-center">
    
        <Hero/>
    
      </div>
    </>
  );

}

export default HomePage;
