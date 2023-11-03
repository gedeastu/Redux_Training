import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import condition from '../features/condition'
export const store = configureStore({
    reducer:{
        product: productReducer,
        condition: condition
    },
})