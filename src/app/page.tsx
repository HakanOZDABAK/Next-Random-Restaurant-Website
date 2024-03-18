"use client";
import CategoryCard from "@/components/CategoryCard";
import { MealServices } from "@/service/MealServices";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    const take = async () => {
      let mealServices = new MealServices();
      console.log(await mealServices.getMealCategory())
      setCategories(await mealServices.getMealCategory());
    };

    take();
  });

  return <main><div className="grid">
    {categories.map((category: any)=>(

  <div className=" ml-6 mt-3"><CategoryCard key={category.idCategory} category={category} /></div>))}
</div>

  </main>;
}
