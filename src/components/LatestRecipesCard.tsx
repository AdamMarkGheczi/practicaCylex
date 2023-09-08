import Image from 'next/image'
import React from 'react'

export default function ImageWithText({src, children}:any) {
  return (
    <div className = "flex flex-col items-center container">
        <Image src = {src} width = {300} height = {300} alt="img" className = "rounded-xl"/>
        <p className = "p-10 text-black w-[80%] text-xl">{children}</p>
    </div>
  )
}
