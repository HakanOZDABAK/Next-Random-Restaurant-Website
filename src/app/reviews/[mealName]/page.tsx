'use client'
import { useEffect } from "react"

export default function Reviews({ params }: { params:{ mealName: string }  }) {

    useEffect(()=>{
        console.log(params.mealName)
    })
  return (
    <div></div>
  )
}
