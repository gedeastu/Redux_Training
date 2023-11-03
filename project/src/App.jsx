import React from 'react'
import AddProduct from './components/AddProduct'
import ShowProduct from './components/ShowProduct'
import ChangeCondition from './components/changeCondition'
const App = () => {
  return (
    <>
   <div className='flex flex-row items-center'>
   {/* <AddProduct/> */}
   <ShowProduct/>
   <ChangeCondition/>
   </div>
    </>
  )
}

export default App