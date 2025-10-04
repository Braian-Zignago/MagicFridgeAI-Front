import { useFoodDataDelete } from "../hooks/useFoodDataDelete";
import type { FoodData } from "../interface/FoodData";
import { FaRegTrashAlt } from "react-icons/fa";




export function Card({ id, name, category, quantity, expirationDate} : FoodData){

    const { mutate, isPending } = useFoodDataDelete();

    const submit = () => {
        if (id !== undefined) {
            mutate(id);
        }
    }

    return(
        <div className="grid grid-cols-50 bg-white  p-4 rounded-lg shadow-md ">
            <h3 className="col-span-48 text-xl font-semibold">{name}</h3>
            <button onClick={submit} className="col-span-2 justify-items-end hover:scale-120 h-5 w-4"><FaRegTrashAlt /></button>
            <p className="col-span-50 text-gray-600">Categoria: {category}</p>
            <p className="col-span-50 text-gray-600">Quantidade: {quantity}</p>
            <p className="col-span-50 text-gray-600">Validade: {expirationDate}</p>
        </div>
    )
}
