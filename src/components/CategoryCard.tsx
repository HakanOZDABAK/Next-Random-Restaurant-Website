'use client';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryCard(props: { category: any }) {
    const { category } = props; 
    const router = useRouter()

    const handleToPath=(categoryName:string)=>{
        router.push(`/category/${categoryName}`)

    }


    const footer = (
        <>
            <Button onClick={()=>{handleToPath(category.strCategory)}} label="Go This Category" icon="pi pi-check" />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card key={category.idCategory} title={category.strCategory} subTitle="Category" footer={footer} className="md:w-25rem">
            <img className='h-10rem w-10rem' alt="Card" src={category.strCategoryThumb} />
                <p className="m-0">
                  {category.strCategoryDescription}
                </p>
            </Card>
        </div>
    )
}
        