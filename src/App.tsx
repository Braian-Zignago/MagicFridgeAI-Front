import './App.css'
import { Card } from './components/Card';
import { useFoodData } from './hooks/useFoodData';

function App() {

  const { data } =  useFoodData();

  return (
    <>
    <div className="h-screen bg-gradient-to-b from-gray-300 to-gray-400 items-center justify-center flex flex-col">
      <div className='h-9/10 w-9/10 bg-white shadow-lg rounded-lg grid grid-cols-2 p-4'>
        <div className='flex flex-col gap-4 items-center bg-cyan-50 rounded-l-lg'>
          <div className='flex  justify-between items-center p-4 w-10/12'>
            <h2 className='text-3xl font-bold text-green-800'>Adicione novo ingrediente!</h2>
            <button className='bg-green-700 p-4 rounded-2xl'>+ Adicionar item</button>
          </div>
          <div className='flex flex-col gap-2 flex-grow h-0 overflow-y-auto w-10/12'>
          {data?.map(foodData => 
            <Card 
              name={foodData.name} 
              category={foodData.category} 
              quantity={foodData.quantity} 
              expirationDate={foodData.expirationDate}/> 
          )}
          </div>
        </div>
        <div className='bg-red-300 rounded-r-lg'>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
