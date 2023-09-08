'use client'

import React from 'react'
import RecipeCard from '@/components/RecipeCard'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ResultsPage() {
  const searchParams = useSearchParams()
 
  const selectedCategory = searchParams?.get('selectedCategory')
  const ingredients = searchParams?.get('ingredients')

  const [fetchedAlready, setFetchedAlready] = useState(false);
  const [data, setData] = useState<any>(null);
  const [isLoading, setisLoading] = useState(false);
  const [err, setErr] = useState('');
  const [finalContent, setFinalContent] = useState([]);

  async function fetchData () {
    setisLoading(true);
      try {
        const response = await fetch(`/api/openai?ingredients=${ingredients}?selectedCategory=${selectedCategory}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        
        
        if(!response.ok) {
          throw new Error(`Error! ${response.status}`)
        }
        
        const result = await response.json();
        console.log(result.text);
        // console.log(result);

        setData(result)
    } catch (err:any) {
        setErr(err.message);
    }finally{
        setisLoading(false);
    }

      setFetchedAlready(true);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    
    let elements:any = []
    if(data && data.text !== undefined){
      let array = JSON.parse(data.text);
      console.log("Valami")
      console.log(array);
      for(let i=0; i<array.length; i++) {
        elements.push(<RecipeCard imgSrc = "/category_images/breakfast/breakfast_1.jpg" title = {array[i].name} prepTime = {array[i].duration} ingredients = {array[i].ingredients.join(', ')}>{array[i].preparation}</RecipeCard>)
      }
    }
    
    setFinalContent(elements);

  }, [data])


  return (
    <main className = "w-full h-full bg-gray-200">
      <section className = "w-4/5 h-full container mx-auto p-2 flex flex-col gap-10">
        <h2 className = "text-gray-700 text-2xl py-4">Generated recipes in {selectedCategory} category</h2>
        {isLoading && <img className = "w-[100px] h-[100px]" src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3c1NXNvamo4enhna3VhbTgxZW4zc2o5cHgxbXE2bzExMnFpODdiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.gif"/>}
        {!isLoading && <div className = "flex flex-col gap-10 justify-center">{finalContent}</div>}
      </section>
    </main>
  )
}
