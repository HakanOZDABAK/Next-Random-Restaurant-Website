

import { MealServices } from '@/service/MealServices';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { useEffect, useState } from 'react';

interface Product {
idMeal:string,
strMeal:string,
strMealThumb:string,
inventoryStatus: string;

}

export default function FavoriteFoodTemplate() {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    
    useEffect(() => {
        const handleGetMeal = async () => {
          try {
            let mealServices = new MealServices();
    
            const allMeals = await mealServices.getMealByCategory(
              "Chicken"
            );
            setProducts(allMeals)
            console.log(allMeals)
          } catch (err) {
            console.log(err);
          }
        };
        handleGetMeal();
      },
      []);
    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={product.strMealThumb} alt={product.strMeal} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.strMeal}</h4>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card ">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        