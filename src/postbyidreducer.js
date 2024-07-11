import { createSlice } from "@reduxjs/toolkit"
let initialState={
    loading:false,
    post:null,
    error:null
}
export const singlePostReducer=createSlice({
    name:'post',
    initialState,
    reducers:{
        //promise object will be in three stages, function for all three stages
        //1. Request (pending)
        //2. success (fetched the data from external API)
        //3. Error (error while fetching the data)
        fetchPostByIdRequest:(state,action)=>{//pending state
          return {loading:true,post:null,error:null}//update loading to true,other properties like posts and error remains same
        },
        fetchPostByIdSuccess:(state,action)=>{//success state - action.payload is "array of posts"
            //action.payload is the result of fetch function
            return {loading:false,post:action.payload,error:null}
        },
        fetchPostByIdError:(state,action)=>{ //action.payload is an error object from external API
            return {loading:false,post:null,error:action.payload}
        }
      }
    })
    export const {fetchPostByIdRequest,fetchPostByIdSuccess,fetchPostByIdError}=singlePostReducer.actions
    export default singlePostReducer.reducer