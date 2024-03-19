'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function MealCard(props: { meal: any }) {
    const { meal } = props; 
  
    const footer = (
        <>
            <Button rounded severity="info" text raised  onClick={()=>{alert("Ordered")}} label="Order This Meal" icon="pi pi-check" />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card key={meal.idMeal} title={meal.strMeal} subTitle="Meal" footer={footer} className="md:w-25rem">
            <img className='h-10rem w-10rem' alt="Card" src={meal.strMealThumb} />
                <p className="m-0">
                  You can order meal with button
                </p>
            </Card>
        </div>
    )
}
        