import React from 'react'
import AddProduct from './components/AddProduct'
import ShowProduct from './components/ShowProduct'
const App = () => {
  return (
    <>
   <div className='flex flex-row items-center'>
   <AddProduct/>
   <ShowProduct/>
   </div>
    </>
  )
}

export default App