'use client'
import { useEffect } from "react"

export default function Reviews({ params }: { params:{ strMeal: string }  }) {

    useEffect(()=>{
        console.log(params.strMeal)
    })
  return (
    <div></div>
  )
}
