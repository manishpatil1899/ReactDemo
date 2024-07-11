import { createSlice } from "@reduxjs/toolkit";
//state and action
export const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increment:(state,action)=>{
            state.count=state.count+1
        },
        decrement:(state,action)=>{
            state.count = state.count-1
        }
    }
})
export const {increment,decrement}=counterSlice.actions // import it in component(UI)
export default counterSlice.reducer // Import it in Redux Store (Centralized store)