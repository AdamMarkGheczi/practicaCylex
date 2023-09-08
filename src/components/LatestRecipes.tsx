import React from 'react'
import ImageWithText from './LatestRecipesCard'

export default function LatestRecipes() {
  return (
    <div className = "flex flex-col items-center bg-white p-10">
        <h2 className = "text-black text-3xl pb-10">Latest recipes</h2>
        <div className = "flex flex-row">
            <ImageWithText src = "/category_images/category_breakfast.jpg">French croissant with butter and peach</ImageWithText>
            <ImageWithText src = "/category_images/category_soups.jpg">Creamy tomato soup</ImageWithText>
            <ImageWithText src = "/category_images/category_dinner.jpg">Grilled chicken breast with cooked rice and string-peas</ImageWithText>
            <ImageWithText src = "/category_images/category_desserts.jpg">Raspberry jam and vanilla cream cake</ImageWithText>
        </div>
    </div>
  )
}
