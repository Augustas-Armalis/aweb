const TestimonialButton = ({title, src}) => {

  return (
    <>

      <div className="select-none cursor-pointer circle-none bg-[var(--gray4)] border border-[var(--gray3)] flex items-center justify-center gap-1.5 rounded-[10px] w-fit h-fit !py-[5px] !pr-[12px] !pl-[8px] transition-bg transition-border ease-out duration-300 hover:bg-[var(--gray3)]/80 hover:border-[var(--gray2)]/60">
        <img src={src} alt="icon" className="w-4 h-4"/>
        <p className="smif text-[18px] leading-[115%] z-20">{title}</p>
      </div>


      {/* This is how unactive should look like below */}

      {/* <div className="select-none cursor-pointer circle-none bg-black border border-[var(--gray3)] flex items-center justify-center gap-1.5 rounded-[10px] w-fit h-fit !py-[5px] !pr-[12px] !pl-[8px] transition-bg transition-border ease-out duration-300 hover:bg-[var(--gray4)] hover:border-[var(--gray2)]">
        <img src={src} alt="icon" className="w-4 h-4 opacity-70"/>
        <p className="smif text-[18px] alt leading-[115%] z-20">{title}</p>
      </div> */}
    
    </>
  )
}

export default TestimonialButton;