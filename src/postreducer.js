import {createSlice} from '@reduxjs/toolkit'
let initialState={
    loading:false,
    posts:[],
    error:null
}
export const postReducer=createSlice({
    name:'posts',
    initialState,
    reducers:{
      //promise object will be in three stages, function for all three stages
      //1. Request (pending)
      //2. success (fetched the data from external API)
      //3. Error (error while fetching the data)
      fetchPostRequest:(state,action)=>{//pending state
        return {loading:true,posts:[],error:null}//update loading to true,other properties like posts and error remains same
      },
      fetchPostSuccess:(state,action)=>{//success state - action.payload is "array of posts"
          //action.payload is the result of fetch function
          return {loading:false,posts:action.payload,error:null}
      },
      fetchPostError:(state,action)=>{ //action.payload is an error object from external API
          return {loading:false,posts:[],error:action.payload}
      }
    }
  })
  export const {fetchPostRequest,fetchPostSuccess,fetchPostError}=postReducer.actions
  export default postReducer.reducer