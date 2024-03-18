
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CategoryCard(props: { category: any }) {
    const { category } = props; 

    const footer = (
        <>
            <Button label="Go This Category" icon="pi pi-check" />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={category.strCategory} subTitle="Category" footer={footer} className="md:w-25rem">
            <img className='h-10rem w-10rem' alt="Card" src={category.strCategoryThumb} />
                <p className="m-0">
                  {category.strCategoryDescription}
                </p>
            </Card>
        </div>
    )
}
        