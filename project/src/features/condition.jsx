import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    'boolean':false,
}
const productSlice = createSlice({
    name: "condition",
    initialState,
    reducers:{
        stateCondition: (state) => {
            state.boolean = !state.boolean
        },
    },                                                                                                                          
})
export const {stateCondition} = productSlice.actions;
export default productSlice.reducer;