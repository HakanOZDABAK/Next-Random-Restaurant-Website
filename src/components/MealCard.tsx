'use client';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'next/navigation';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { MenuItem } from 'primereact/menuitem';

export default function MealCard(props: { meal: any }) {
    const { meal } = props; 
    const {setCartItems} = useCartStore()
    const router = useRouter();
        const itemRenderer = (item: MenuItem) => (
        <a className="flex align-items-center p-menuitem-link">
          <span className="mx-2">{item.label} = {item.cost}</span>
          {item.badge && <Badge className="ml-auto" value={item.badge} />}
        </a>
      );
const handleToRoute=(path:string)=>
{
router.push(path)
}
      
    const footer = (
        <div className='grid'>
            <div className="col-6"> 
            <Button rounded severity="success" text raised  onClick={()=>{setCartItems(meal.strMeal,itemRenderer)}} label="Order This Meal" icon="pi pi-check" />
            </div>
            <div className="col-6"> 
            <Button rounded severity="info" text raised  onClick={()=>{handleToRoute(`/reviews/${meal.strMeal}`)}} label="Reviews This Food" icon="pi pi-send" />
            </div>
           

        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card key={meal.idMeal} title={meal.strMeal} subTitle="Meal"footer={footer} className="md:w-25rem">
            <img className='h-10rem w-10rem' alt="Card" src={meal.strMealThumb} />
                <p className="m-0">
                  You can order meal with button, it cost is 5$
                </p>

            </Card>
        </div>
    )
}
        