import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./counterreducer";
import accountreducer from "./bankaccreducer";
import todosreducer from "./todosreducer";
import bookreducer from "./bookreducer";
import  postReducer  from "./postreducer";
import postbyidredcuer from "./postbyidredcuer";
import  commentsReducer  from "./commentsreducer";

export const store=configureStore({
    reducer:{
       counter: counterreducer,
       bankAccount:accountreducer,
       todos:todosreducer,
       books:bookreducer,
       postRequest:postReducer,
       postByIdRequest:postbyidredcuer,
       commentsRequest:commentsReducer
    }
})