import React from 'react'
import { stateCondition } from '../features/condition'
import { useSelector,useDispatch } from 'react-redux'
const ChangeCondition = () => {
  const condition = useSelector((state)=>state.condition)
  const dispatch = useDispatch()
  return (
   <>
   <button key={1} onClick={()=>dispatch(stateCondition())} className='bg-blue-400 relative z-50 right-0 text-black mr-5'>{condition.boolean ? 'False' : 'True'}</button>
   <button key={2} onClick={()=>dispatch(stateCondition())} className='bg-blue-400 relative z-50 right-0 text-black mr-5'>{condition.boolean ? 'False' : 'True'}</button>
   </>
  )
}

export default ChangeCondition;