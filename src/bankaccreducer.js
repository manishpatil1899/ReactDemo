import { createSlice } from "@reduxjs/toolkit";

export const accountSlice=createSlice({
    name:'account',
    initialState:{balance:20000,error:null},
    reducers:{
        withdraw:(state,action)=>{
            if(state.balance-action.payload < 500)
                state.error='Insufficient Balance'
            else{
            state.balance=state.balance-action.payload
            state.error=null
            }
        },
        deposit:(state,action)=>{
            state.balance=state.balance+action.payload
            state.error=null
        }
    }
})
export const {withdraw,deposit}=accountSlice.actions
export default accountSlice.reducer