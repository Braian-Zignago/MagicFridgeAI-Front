import { useEffect, useState } from 'react';


import "./modal.css";
import type { FoodData } from '../interface/FoodData';
import { useFoodDataMutate } from '../hooks/useFoodDataMutate';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}



const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("")
    const [quantity, SetQuantity] = useState(0);
    const [expirationDate, SetExpirationDate] = useState("");
    const { mutate, isPending } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            name,
            category,
            quantity,
            expirationDate
        }
        mutate(foodData);
    }

        useEffect(() => {
        if(!isPending) return 
        closeModal();
    }, [isPending])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <div className='flex flex-row justify-between items-center mb-4 w-full'>
                    <h2>Cadastre um novo item</h2>
                    <button onClick={closeModal} className=' hover:scale-110 hover:cursor-pointer '>X</button>
                </div>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName}/>
                    <Input label="Categoria" value={category} updateValue={setCategory}/>
                    <Input label="Cuantidade" value={quantity} updateValue={SetQuantity}/>
                    <Input label="Data de Validade" value={expirationDate} updateValue={SetExpirationDate}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}