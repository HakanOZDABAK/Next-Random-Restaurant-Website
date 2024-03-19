'ùse client'
import { MealServices } from "@/service/MealServices"
import { useEffect, useState } from "react"

export default function EachCategory({params}:{ params:{categoryName:string}}) {
   const[meals,setMeals] = useState<any>()
    useEffect(()=>{
        const handleGetMeal = async() =>{
try{
    let mealServices = new MealServices()
    const result = await mealServices.getMealByCategory(params.categoryName)
    setMeals(result)
}catch(err){
    console.log(err)

        }
        }
    })
  return (
    <div></div>
  )
}
