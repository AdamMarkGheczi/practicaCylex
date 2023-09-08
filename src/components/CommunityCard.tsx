import React from 'react'
import Image from 'next/image'

export default function CommunityCard({src, title, children}:any) {
  return (
    <div className = "flex flex-col items-center w-1/3">
        <Image src = {src} alt = "Community logo icon" width = {100} height = {100}/>
        <h2 className = "text-main pt-5 pb-3">{title}</h2>
        <p className = "text-gray-700 text-center">{children}</p>
    </div>
  )
}
