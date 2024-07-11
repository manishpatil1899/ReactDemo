import { createSlice } from "@reduxjs/toolkit"

let initialState={
    loading:false,
    comments:[],
    error:null
}
export const commentsReducer=createSlice({
    name:'comments',
    initialState,
    reducers:{
        fetchCommentsRequest:(state,action)=>{
            return {loading:true,comments:[],error:null}
        },
        fetchCommentsSuccess:(state,action)=>{
            return {loading:false,comments:action.payload,error:null}
        },
        fetchCommentsError:(state,action)=>{
            return {loading:false,comments:[],error:action.payload}
        }
    }
})
export const {fetchCommentsRequest,fetchCommentsSuccess,fetchCommentsError}=commentsReducer.actions
export default commentsReducer.reducer