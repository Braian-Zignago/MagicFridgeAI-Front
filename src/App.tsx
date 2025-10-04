import { use, useState } from 'react';
import './App.css'
import { Card } from './components/Card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal';
import { useRecipeData } from './hooks/useRecipeData';
import ReactMarkdown from 'react-markdown';

function App() {

  const { data } =  useFoodData();

  const { data: recipeData, isPending, refetch } = useRecipeData(); 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSend, setIsSend] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const changeRecipe = () => {
    setIsSend(true);
    refetch(); 
  }


  return (
    <>
    <div className="h-screen bg-gradient-to-b from-gray-300 to-gray-400 items-center justify-center flex flex-col">
      <div className='h-9/10 w-9/10 bg-white shadow-lg rounded-lg grid grid-cols-2 p-4'>
        <div className='flex flex-col gap-4 items-center bg-cyan-50 rounded-l-lg'>
          <div className='flex  justify-between items-center p-4 w-10/12'>
            <h2 className='text-3xl font-bold text-green-800'>Adicione novo ingrediente!</h2>
            <div>
              {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
              <button className='bg-green-700 p-4 rounded-2xl hover:scale-105' onClick={handleOpenModal}>+ Adicionar Item</button>
            </div>
          </div>
          <div className='flex flex-col gap-2 flex-grow h-0 overflow-y-auto w-10/12'>
          {data &&
          data?.map(foodData => 
            <Card 
            id={foodData.id}
            name={foodData.name} 
            category={foodData.category} 
            quantity={foodData.quantity} 
            expirationDate={foodData.expirationDate}/> 
          )
        }
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center bg-cyan-50 rounded-l-lg'>
          <div className='flex  justify-between items-center p-4 w-10/12'>
            <h2 className='text-3xl font-bold text-green-800'>Gerador de receitas</h2>
            <button onClick={changeRecipe} className='bg-green-700 p-4 rounded-2xl hover:scale-105'>{(isSend && isPending) ? "Gerando Receita..." : "!  Gerar Receita"}</button>
          </div>
          {isSend &&
          <div className='flex flex-col gap-2 flex-grow h-0 overflow-y-auto w-10/12 p-4 bg-white rounded-lg shadow-md'>
            {isPending ? (
              <span>Carregando...</span> 
            ) : (
              <ReactMarkdown>{recipeData ? recipeData.toString() : "Clique para gerar uma receita"}</ReactMarkdown>
            )}
            
          </div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App
