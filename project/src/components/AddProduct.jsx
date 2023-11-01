import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice';

const AddProduct = () => {
 const [Title,setTitle] = useState('');
 const [Price,setPrice] = useState('');

 const dispatch = useDispatch();

 const updateProduct = (e)=>{
    e.preventDefault();
    dispatch(update(Title,Price));
 }

  return (
    <>
    <div className='w-96'>
        <form onSubmit={updateProduct} action="">
            <div>
                <label htmlFor="">Title</label>
                <input type="text" 
                value={Title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="text"
                value={Price}
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default AddProduct