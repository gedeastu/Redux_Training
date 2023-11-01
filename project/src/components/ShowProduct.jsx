import React from 'react'
import { useSelector } from 'react-redux'
const ShowProduct = () => {
  const {title,price} = useSelector((state) => state.product);
  return (
    <>
    <div className='w-96 h-20 shadow-lg'>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
    </>
  )
}

export default ShowProduct