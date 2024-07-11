import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice({
    name:'booklist',
    initialState:[],
    reducers:
    {
        addBook:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addBook} = BookSlice.actions;
export default BookSlice.reducer;