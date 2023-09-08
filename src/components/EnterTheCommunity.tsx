import React from 'react'
import CommunityCard from './CommunityCard'


export default function EnterTheCommunity() {
  return (
    <div className = "bg-gray-200 h-[60vh] w-full">
        <section className = "container mx-auto w-[70vw] h-full flex flex-col items-center">
            <h1 className = "text-gray-600 text-4xl py-12 text-center">Enter the community</h1>
            <div className = " flex gap-14 justify-between">
                <CommunityCard src = "/community_1.png" title = "Find recipes">Explore the recipes selected by our staff uploaded by our community</CommunityCard>
                <CommunityCard src = "/community_2.png" title = "Review recipes">Evaluate and comment on the dishes proposed by others</CommunityCard>
                <CommunityCard src = "/community_3.png" title = "Add recipes">Pass on your know-how by proposing your recipes</CommunityCard>
            </div>
        </section>
    </div>
  )
}
