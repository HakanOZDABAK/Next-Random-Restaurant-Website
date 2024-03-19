"use client";
import MealCard from "@/components/MealCard";
import { MealServices } from "@/service/MealServices";
import { useEffect, useState } from "react";

export default function EachCategory({
  params,
}: {
  params: { categoryName: string };
}) {
  const [meals, setMeals] = useState<any[]>([]);
  useEffect(() => {
    const handleGetMeal = async () => {
      try {
        let mealServices = new MealServices();

        setMeals(await mealServices.getMealByCategory(params.categoryName));
      } catch (err) {
        console.log(err);
      }
    };
    handleGetMeal();
  });
  return (
    <main>
      <div className="grid flex justify-content-center">
        {meals.map((meal: any) => (
          <div className=" mt-2 md:ml-6 md:mt-3">
            <MealCard key={meal.idMeal} meal={meal} />
          </div>
        ))}
      </div>
    </main>
  );
}
