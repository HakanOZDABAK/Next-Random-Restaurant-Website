"use client";
import { useCartStore } from '@/store/useCartStore';
import { all } from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Divider } from 'primereact/divider';
import { useEffect, useState } from 'react';

interface ColumnMeta {
    field: string;
    header: string;
}


export default function Cart() {
    const {cartItems} = useCartStore()
    const columns: ColumnMeta[] = [
        {field: 'label', header: 'Name of Meal'},
        {field: 'badge', header: 'Meal Quantity'},
        {field: 'cost', header: 'Cost'},

    ]; 
    const[allPrice,setAllPrice]= useState<number>(0)
    useEffect(() => {
        const calculateTotalCost = () => {
            let totalPrice = 0;
            cartItems.forEach(item => {
                totalPrice += item.badge * 5;
            });
            setAllPrice(totalPrice);
        };
    
        calculateTotalCost();
    })
 

    return (
        <div className="card relative">
            <DataTable value={cartItems} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={i} field={col.field} header={col.header} />
                ))}
            </DataTable>
            
            <Divider/>
            <h2 >All Costs are = {allPrice}</h2>
            <Button className =" absolute top-10 right-0"label='Buy Cart' onClick={()=>alert("BOUGTH")}/>
        </div>
    );
}
        