'use client'

import React, { useState, useEffect } from 'react'
import ModalElement from './ModalElement';
import Link from 'next/link';
import { useIngredientsContext } from '@/contexts/IngredientsContext';

export default function Modal() {

    const [modalClass, setModalClass] = useState('fixed')
    const [selectedVal, setSelectedVal] = useState('')
    const imagesPath = '/category_images/category_'

    const { ingredients, modalOpen, setModalOpen }:any = useIngredientsContext()


    useEffect(()=> {
        if(modalOpen){
            openModal();
        } else{
            closeModal();
        }
    }, [modalOpen])

    const closeModal = () => {
        setModalClass('hidden');
    }
    const openModal = () => {
        setModalClass('fixed')
    }
    
    function handleClick(val:any){
        setSelectedVal(val);
    }

    return (
        <div className={`${modalClass} left-0 top-0 h-screen w-screen z-20`}>
            <div onClick={() => {setModalOpen(false)}} className='absolute left-0 top-0 w-screen h-screen bg-black opacity-40'></div>
            <div className='bg-white relative mt-[5%] container mx-auto z-30 p-8'>
                <p onClick={() => {setModalOpen(false)}} className='font-bold cursor-pointer absolute right-6 top-4'>X</p>
                <div className = "flex flex-col items-center">
                    <h1 className='text-4xl w-full text-center pb-8'>Select your category</h1>
                    <form className='flex flex-wrap gap-4 justify-center'>
                        <ModalElement src={`${imagesPath}breakfast.jpg`} func={handleClick} text="Breakfast" val="breakfast" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}soups.jpg`} func={handleClick} text="Soups" val="soups" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}dinner.jpg`} func={handleClick} text="Dinner" val="dinner" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}desserts.jpg`} func={handleClick} text="Desserts" val="desserts" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}salads.jpg`} func={handleClick} text="Salads" val="salads" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}quick.jpg`} func={handleClick} text="Quick & Easy" val="quick_and_easy" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}vegetarian.jpg`} func={handleClick} text="Vegetarian" val="vegetarian" selectedVal={selectedVal}/>
                        <ModalElement src={`${imagesPath}lunchbox.jpg`} func={handleClick} text="Lunch" val="lunch" selectedVal={selectedVal}/>
                    </form>
                    <Link href = {{
                        pathname: "/results",
                        query: {
                            ingredients: ingredients,
                            selectedCategory: selectedVal
                        }
                    }}className = "bg-main py-3 px-8 border border-main text-white font-semibold ">Create Recipe</Link>
                </div>
            </div>
        </div>
      )
}