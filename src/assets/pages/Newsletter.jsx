import { Link } from 'react-router-dom';
import FlyInTitle from "../components/FlyInTitle.jsx";
import FlyInAltTitle from "../components/FlyInAltTitle.jsx";
import EmailPopup from "../components/EmailPopup.jsx";




const Newsletter = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex">
      <div className="w-[800px] h-full bg-black flex flex-col justify-center items-center !px-[64px] !py-[32px]">

        <Link to="/" className="hover:opacity-70 transition-opacity duration-300 ease-out absolute top-[32px] left-[64px]">
          <img src="images/logos/MiniLogo.svg" alt="logo" className="w-[42px] h-[42px]"/>
        </Link>


          <div>
  
            <div className="flex flex-col gap-2">
              <FlyInTitle title="Lorem ipsum dolor sit amet consectetur adipisicing elit" className="text-start !text-[32px]" staggerTime={0.01}/>
              <FlyInAltTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus numquam sunt vero aliquid" className="text-start !text-[18px] mb-2"/>
            </div>


  
          <div className="flex flex-col gap-6 p-12 max-w-[404px]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Name"
                className="bg-[var(--gray4)] leading-[130%] max-w-[200px] !pt-[8px] !pb-[7px] !pl-[19px] !pr-[19px] border border-[var(--gray3)] text-base text-white placeholder-alt rounded-[10px] px-5 py-4 outline-none transition-colors duration-200 ease-in-out hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/80 focus:bg-[var(--gray3)]/80 focus:border-[var(--gray2)]/80"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-[var(--gray4)] leading-[130%] max-w-[200px] !pt-[8px] !pb-[7px] !pl-[19px] !pr-[19px] border border-[var(--gray3)] text-base text-white placeholder-alt rounded-[10px] px-5 py-4 outline-none transition-colors duration-200 ease-in-out hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/80 focus:bg-[var(--gray3)]/80 focus:border-[var(--gray2)]/80"
              />
            </div>
  
            <a
              className="w-full select-none bg-white border border-black flex items-center justify-center rounded-[10px] h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-opacity ease-out duration-500 hover:opacity-70"
              href="#"
            >
              <p className="smif text-black text-[18px] leading-[115%] !pt-[4px]">Lorem ipsum</p>
            </a>
  
          </div>
        </div>

        <div className="absolute bottom-[32px] left-[64px]">
          <p className="!text-base text-[var(--gray2)]">AWeb © {new Date().getFullYear()}</p>
          


          <div className="flex flex-row gap-1 z-2 mt-2">
            <div>
              <a href="https://x.com/AugustasWebsite" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
                <img src="images/svgs/Twitter.svg" alt="icon" className="w-[24px] h-[24px]"/>
              </a>
            </div>
            <div>
              <EmailPopup />
            </div>
            <div>
              <a href="https://www.linkedin.com/in/augustas-web/" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
                <img src="images/svgs/Linkedin.svg" alt="icon" className="w-[24px] h-[24px]"/>
              </a>
            </div>
            <div>
              <a href="https://dribbble.com/Augustas_Web/" target="_blank" className="cursor-pointer opacity-30 hover:opacity-60 circle-none transition-opacity duration-300 ease-out">
                <img src="images/svgs/Dribble.svg" alt="icon" className="w-[24px] h-[24px]"/>
              </a>
            </div>
          </div>
        </div>

      </div>



      <div className="w-full h-full bg-gray-800">
        <img
          src="images/thumbnais/me.png"
          alt="image"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;