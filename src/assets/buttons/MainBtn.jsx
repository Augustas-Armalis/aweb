const MainBtn = ({title, href}) => {

  return (
      <>

          <a className="circle-none select-none bg-white border border-black flex items-center justify-center rounded-[10px] w-fit h-fit !pt-[4px] !pb-[7px] !pl-[19px] !pr-[19px] transition-opacity ease-out duration-500 hover:opacity-70" href={href}>
            <p className="smif text-black text-[18px] leading-[115%] !pt-[4px]">{title}</p>
          </a>
      
      </>
  )
}

export default MainBtn;