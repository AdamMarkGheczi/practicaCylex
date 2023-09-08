"use client"

import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'
import { usePathname } from '../../node_modules/next/navigation'

export default function Navbar() {
    const pathname = usePathname()
  return (
    <nav className = "bg-white w-full">
        <section className = "container mx-auto flex items-center justify-between p-2">
            <Image src = {"/logo.png"} width = {300} height = {300} alt="Main logo" className = "p-8"></Image>
            <section className = "flex justify-between gap-4">
                { pathname != '/' && ( <Link href="/" className = "text-black hover:text-main">Home</Link> )}
                <Link className="text-black hover:text-main" href="/enter-the-community">Enter the community</Link>
                <Link className="text-black hover:text-main" href="/contact">Contact</Link>

                <section className = "ml-4 flex items-center">
                    <Link href={"https://facebook.com"}>
                        <Image className='w-8 h-8' src={"/Facebook.png"} alt='facebook logo' width={100} height={100}/>
                    </Link>
                    
                    <Link href={"https://instagram.com"}>
                        <Image className='w-8 h-8' src={"/Instagram.png"} alt='instagram logo' width={100} height={100}/>
                    </Link>
                    
                    <Link href={"https://twitter.com"}>
                        <Image className='w-8 h-8' src={"/Twitter.png"} alt='twitter logo' width={100} height={100}/>
                    </Link>
                </section>
            </section>
        </section>
    </nav>
  )
}
