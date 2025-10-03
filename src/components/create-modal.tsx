import { useEffect, useState } from 'react';


import "./modal.css";
import type { FoodData } from '../interface/FoodData';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal(){
    const [name, setName] = useState("");
    const [category, setCategory] = useState("")
    const [quantity, SetQuantity] = useState(0);
    const [expirationDate, SetExpirationDate] = useState("");

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName}/>
                    <Input label="Categoria" value={category} updateValue={setCategory}/>
                    <Input label="Cuantidade" value={quantity} updateValue={SetQuantity}/>
                    <Input label="Data de Validade" value={expirationDate} updateValue={SetExpirationDate}/>
                </form>
            </div>
        </div>
    )
}