import Image from "next/image"
import { ContentBoxProps } from "./types"

function ContentBox({ title, copy, partner, money, bgImg}: ContentBoxProps) {
    return (
        <div className="flex flex-col w-full px-12 pt-24 pb-32 overflow-hidden relative">
            <div className="relative w-fit">
                <div className="relative">
                    <span className="text-6xl font-headline text-[#2E2E2D] absolute w-full left-1/2 -translate-x-1/2 top-1/2 text-center">{title}</span>
                    <span className="text-8xl font-headline text-[#EAEAEA]">{title}</span>
                </div>
                <Image width={"89"} height={"48"} src={"/img/svg/circle-design.svg"} alt={""} priority className="absolute min-w-[352px] -top-16 -left-1/2"/>
            </div>
            <div className="mt-16 pl-20">
                {copy}
            </div>
            {partner && 
                <div className="w-full flex flex-row justify-center items-center gap-36 mt-32">
                    <Image src={"/img/logo/littleLunch.png"} alt={"test"} width="150" height="150" priority/>
                    <Image src={"/img/logo/gutcher.png"} alt={"test"} width="122" height="150" priority/>
                    <Image src={"/img/logo/glinizer.png"} alt={"test"} width="217" height="150" priority/>
                </div>
            }
            {money && 
                <div className="w-full flex flex-row justify-center items-center gap-36 mt-32">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-xl">1. Jahr</span>
                        <span className="text-3xl text-[#B49883]">430 Euro</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-xl">2. Jahr</span>
                        <span className="text-3xl text-[#B49883]">550 Euro</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-xl">3. Jahr</span>
                        <span className="text-3xl text-[#B49883]">670 Euro</span>
                    </div>
                </div>
            }
            {bgImg == "first" &&
                <Image src={"/img/section/brote_grau.png"} alt={"test"} width="1234" height="1099" className="opacity-5 absolute -rotate-[23deg] -top-[130px] -right-[915px]" priority/>
            }
            {bgImg == "second" &&
                <Image src={"/img/section/kuchen_grau.png"} alt={"test"} width="1057" height="942" className="opacity-5 absolute -rotate-[23deg] -top-[230px] -right-[815px]" priority/>
            }
        </div>
    )
}

export default ContentBox