import Image from "next/image"
import { ContentBoxProps } from "./types"

function ContentBox({ title, copy, partner, money, bgImg}: ContentBoxProps) {
    return (
        <div className="grid grid-cols-12 items-stretch gap-8 relative">
            {title}
            {copy}
            {partner && 
                <div>Partner</div>
            }
            {money && 
                <div>Geld</div>
            }
            {/* <Image src={heroImage} alt={"test"} width="374" height="498" className="brightness-75" priority/> */}
        </div>
    )
}

export default ContentBox