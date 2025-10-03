import type { FoodData } from "../interface/FoodData";



export function Card({ name, category, quantity, expirationDate} : FoodData){
    return(
        <div className="flex flex-col  bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600">Categoria: {category}</p>
            <p className="text-gray-600">Quantidade: {quantity}</p>
            <p className="text-gray-600">Validade: {expirationDate}</p>
        </div>
    )
}
