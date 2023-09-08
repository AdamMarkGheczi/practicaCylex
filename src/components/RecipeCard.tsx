"use client"

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function RecipeCard({imgSrc, title, prepTime, ingredients, children}:any) {

    const [prepVisibility, setPrepvisibility] = useState(false);

    let shadow;

    useEffect(() => {

        if(prepVisibility) {
            shadow = "shadow-main";
        }else{
            shadow = "shadow-black"
        }
        
    }, [prepVisibility])

    return (
    <div className = {`bg-white shadow-md ${shadow} p-3 flex flex-col gap-4`}>
        <section className = "w-4/5 h-full container  flex ">
            <Image src = {imgSrc} alt = "food image" width = {100} height = {100} className = "rounded"/>

            <section className = "px-2 w-full">
                <p className = "text-black font-bold w-full">{title}</p>
                <p className = "text-black">Preparation time: {prepTime}</p>
                <p className = "text-black">Ingredients: {ingredients}</p>
            </section>

        </section>

        <section>
            <p className = {`${prepVisibility ? "visible" : "hidden "} text-black transition-all duration-200 ease-linear pb-6`}>Preparation: {children}</p>
            <button onClick = {() => {setPrepvisibility(!prepVisibility)}} className = {`bg-main ${prepVisibility ? "bg-white text-main" : "bg-main text-white"} border-2 border-main rounded px-8 py-2`}>Preparation</button>
        </section>
    </div>
    )
}
