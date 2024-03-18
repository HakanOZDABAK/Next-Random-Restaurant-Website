
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CategoryCard(props: { category: any }) {
    const { category } = props; 
    const header = (
        <img alt="Card" src={category.strCategoryThumb} />
    );
    const footer = (
        <>
            <Button label="Go This Category" icon="pi pi-check" />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                  {category.strCategoryDescription}
                </p>
            </Card>
        </div>
    )
}
        