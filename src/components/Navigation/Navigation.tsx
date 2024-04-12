'use client';
import { CellSignalLow } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

function Navigation() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <div className="fixed w-full left-0 top-0 py-[1.781rem] px-12 dark:bg-[#2E2E2D] z-50 flex justify-between items-center">
                <Link  href="/" className="hover:scale-105 transition-all">
                    <Image width={"89"} height={"48"} src={"/img/logo/logo-brown-white.svg"} alt={""} priority/>
                </Link>
                <button onClick={toggleMenu} aria-haspopup="true" aria-controls="menu" aria-expanded={openMenu} className={`flex flex-row gap-2 hover:gap-3 transition-all items-center justify-center`}>
                    {openMenu ? 
                        <Image width={"28"} height={"48"} src={"/img/svg/close.svg"} className="scale-50" alt={""} priority/>
                    :
                        <Image width={"28"} height={"48"} src={"/img/svg/menu.svg"} alt={""} priority/>
                    }
                    <span className="font-headline text-white text-base">Menu</span>
                </button>
            </div>
            {openMenu && 
                <div className="bg-[#1B1A18] w-screen h-screen fixed z-10 flex justify-center items-center overflow-hidden" role="menu" aria-labelledby="menubutton">
                    <div className="text-white flex flex-row justify-center items-center gap-16">
                        {/* //TODO show images on hover*/}
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Home</Link>
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Über Uns</Link>
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Produkte</Link>
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Partner</Link>
                        <Link href="ausbildung" className="transition-all hover:text-xl focus:text-xl">Ausbildung</Link>
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Kontakt</Link>
                        <Link href="/" className="transition-all hover:text-xl focus:text-xl">Impressum</Link>
                    </div>
                    <Image width={"823"} height={"733"} src={"/img/section/brote_weiß.png"} className="opacity-5 absolute -rotate-[72deg] -bottom-1/2 -right-1/4" alt={""} priority/>
                </div>
            }
        </>
    )
}

export default Navigation