'use client';
import { CellSignalLow } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

function Navigation() {
    return (
        <div className="fixed w-full left-0 top-0 py-[1.781rem] px-12 dark:bg-[#2E2E2D] z-50 flex justify-between items-center">
            <Link  href="/">
                <Image width={"89"} height={"48"} src={"/img/logo/logo-brown-white.svg"} alt={""} priority/>
            </Link>
            <button className="flex flex-row items-center justify-center">
                <CellSignalLow height={16} width={16} weight="thin" className="-rotate-90 text-[#B49883]"/>
                <span className="font-headline text-white text-base">Menu</span>
            </button>
        </div>
    )
}

export default Navigation