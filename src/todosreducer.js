import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(
                {id:Date.now(),
                 task:action.payload,
                 completed:false
                })
        },
        removeTodo:(state,action)=>{
           return state.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
          return state.map((todo)=>todo.id===action.payload ? {...todo,completed:true}:todo)
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer