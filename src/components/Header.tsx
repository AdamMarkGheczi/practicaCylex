'use client'

import React, { useState } from 'react'
import { useIngredientsContext } from "@/contexts/IngredientsContext"

export default function Header() {
  
  const {setIngredients, setModalOpen}:any = useIngredientsContext();
  const [ing, setIng] = useState('');

  function handleChange(e:any){
    setIng(e.target.value);
  }

  function handleClick() {
    setIng("");
    setModalOpen(true);
    setIngredients(ing);
  }

  return (
    <header className='bg-header bg-cover h-[calc(100vh-92.25px)] w-full'>
      <section className = "backdrop-brightness-[65%] h-full">
        <section className='px-32 container mx-auto flex flex-col gap-6 justify-center h-full'>
            <h1 className='text-5xl text-white font-semibold'>A chef in every meal</h1>
            <p className='text-2xl text-white max-w-md'>Use AI to create recipes from your input! And then choose a category you like.</p>
            <div className='flex w-full border border-main border-2 rounded'>
              <input placeholder='What ingredients do you have?' onChange = {handleChange} value={ing} className='outline-none px-2 w-full text-black' type="text" />
              <button onClick = {handleClick} className='bg-main py-3 px-8 text-white font-semibold whitespace-nowrap'>Create recipes</button>
            </div>
        </section>
      </section>
    </header>
  );
}
