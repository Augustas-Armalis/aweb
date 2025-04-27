import HeroTitle from "../components/HeroTitle"
import HeroButtons from "../components/HeroButtons"
import TopLogo from "../components/TopLogo.jsx"
// import AwebSideImage from "../components/AwebSideImage.jsx"
import InfiniteSliders from "../components/InfiniteSliders.jsx"

const Hero = () => {

    return (
        <> 
            <div className="flex flex-col items-center gap-[128px]">
                <div className="w-[1000px] relative h-fit !pt-[42px] !mr-8 !ml-8 max-[1064px]:w-full">
                    <TopLogo />
                    <HeroTitle />
                    <HeroButtons />
                    {/* <AwebSideImage /> */}
                </div>
                <InfiniteSliders />
                <div className="w-[1000px] relative h-fit !pt-[92px] !mr-8 !ml-8 max-[1064px]:w-full bg-red-500">
                    asdasd
                </div>
            </div>
        </>
    )
}

export default Hero;