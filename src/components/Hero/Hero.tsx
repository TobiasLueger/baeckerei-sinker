import Image from "next/image"
import { HeroProps } from "./types"

function Hero({ title, heroImage, videoSrc }: HeroProps) {
    return (
        <div className="grid grid-cols-12 items-stretch gap-8 relative">
            <div className="col-span-12 after:content after:w-full after:h-full after:bg-black/[.75] after:absolute after:top-0 after:left-0">
                <div className="h-screen overflow-hidden">
                    <video autoPlay muted loop className="h-full w-full object-cover">
                        <source src={videoSrc} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={heroImage} alt={"test"} width="374" height="498" className="brightness-75" priority/>
                <Image width={"89"} height={"48"} src={"/img/svg/circle-design.svg"} alt={""} priority className="absolute min-w-[513px] -top-16 -left-6"/>
                <Image width={"89"} height={"48"} src={"/img/svg/circle-design.svg"} alt={""} priority className="absolute min-w-[290px] -bottom-10 -right-32"/>
                <h2 className="mb-8 text-[5rem] leading-[105px] font-headline text-gray-100 dark:text-gray-100 [text-shadow:_4px_3px_10px_rgb(0_0_0_/_16%)] absolute bottom-0 -left-1/2  w-[740px]">
                    {title}
                </h2>
            </div>
            <a href="#1" className="absolute flex flex-col justify-center items-center group gap-10 hover:gap-11 hover:text-[#B49883] focus:text-[#B49883] hover:before:bg-[#B49883] focus:before:bg-[#B49883] transition-all text-gray-100 font-copy right-3 text-sm bottom-20">
                <span className="-rotate-90">Scroll down</span>
                <span className="transition-all block w-[1px] h-12 group-hover:bg-[#B49883] group-focus:bg-[#B49883] bg-white"></span>
            </a>
        </div>
    )
}

export default Hero