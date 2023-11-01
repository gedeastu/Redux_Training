import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    title : 'Adidas',
    price : '9000'
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        update: (state,action) => {
            state.title = action.payload.title;
            state.price = action.payload.price
        }
    }
}
)
export const {update} = productSlice.actions;
export default productSlice.reducer;