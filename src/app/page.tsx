"use client";
import CategoryCard from "@/components/CategoryCard";
import { MealServices } from "@/service/MealServices";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);
  
  useEffect(() => {
    const handleGetAllMeal = async () => {
      let mealServices = new MealServices();
      setCategories(await mealServices.getAllMealCategory());
    };

    handleGetAllMeal();
  });

  return <main><div className="grid">
    {categories.map((category: any)=>(

  <div className="md:ml-6 md:mt-3"><CategoryCard key={category.idCategory} category={category} /></div>))}
</div>

  </main>;
}
