"use client"

import Header from '@/components/Header'
import LatestRecipes from '@/components/LatestRecipes'
import EnterTheCommunity from '@/components/EnterTheCommunity'
import Modal from '@/components/Modal'
import { IngredientsContextProvider } from '@/contexts/IngredientsContext'


export default function Home() {
  return (
    <IngredientsContextProvider>
      <main className="bg-white">
        <Header/>
        <Modal/>
        <LatestRecipes/>
        <EnterTheCommunity/>
      </main>
    </IngredientsContextProvider>
  )
}
