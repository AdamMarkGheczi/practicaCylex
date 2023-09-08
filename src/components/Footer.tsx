import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className = "bg-white">
        <div className = "container mx-auto p-2">
            <div className = "flex items-center justify-between">
                <Image src = {"/logo.png"} width = {300} height = {300} alt="Main logo" className = "p-8"></Image>
                
                <div className = "flex gap-2 font-bold justify-evenly w-4/5">
                    <Link href = "" className = "text-black hover:text-main">About us</Link>
                    <Link href = "" className = "text-black hover:text-main">Contact</Link>
                    <Link href = "" className = "text-black hover:text-main">FAQ</Link>
                    <Link href = "" className = "text-black hover:text-main">Legal disclosure</Link>
                    <Link href = "" className = "text-black hover:text-main">Privacy policy</Link>
                </div>
            </div>

            <div className = "flex justify-center pb-3">
                <p className = "text-black">
                    Copyright © 2023 youChef. All rights reserved.
                </p>
            </div>

        </div>
    </footer>
  )
}
