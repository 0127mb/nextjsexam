"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UzchessHeader() {
    const [active,setactive] = useState()
    
    return (
        <header className="w-344 h-19 border-radius:4px flex items-center ">
            <Image src={"/uzchess.png"} alt={'uzchess'} width={103} height={28} />
            <div className="">
                <div>   <div>
                    ozbek
                </div>
                    <div>Ўзбекча</div>
                    <div>Русский</div></div>

            </div>
            <nav className="flex items-center justify-center w-120.25] h-6 ">
                <Link href="/">Asosiy</Link>
                <Link href="/news">Yangiliklar</Link>
                <Link href="/courses">Kurslat </Link>
                <Link href='/library'>kutubxona</Link>
                <Link href="/contacts">Boglanish</Link>
            </nav>
        </header>
    )
}