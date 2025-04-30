const ButterflyBtn = ({title, href}) => {

    return (
        <>

            <a className="circle-none select-none bg-black border border-[var(--gray2)] flex items-center justify-center rounded-[10px] w-fit h-fit !pt-[7px] !pb-[7px] !pl-[19px] !pr-[19px] transition-bg transition-border ease-out duration-300 hover:bg-[var(--gray4)] hover:border-[var(--gray1)]/60" href={href}>
                <p className="smif text-[18px] leading-[115%] z-20">{title}</p>
            </a>
        
        </>
    )
}

export default ButterflyBtn;