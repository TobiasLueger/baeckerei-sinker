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
                <h2 className="mb-8 text-[5rem] font-headline text-gray-100 dark:text-gray-100 [text-shadow:_4px_3px_10px_rgb(0_0_0_/_16%)] absolute top-1/2 left1/2 -translate-x-1/2 -translate-y-1/2">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default Hero