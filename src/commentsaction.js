import { fetchCommentsError, fetchCommentsRequest, fetchCommentsSuccess } from "./commentsreducer"

export function fetchComments(id){
    //return a async function - asynchronous call
    return async (dispatch)=>{
       //1. making a request - pending (initiating the request)
       console.log('request')
       dispatch(fetchCommentsRequest())//state :{loading:true,posts:[],error:null}
       try{
                 let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                 let data=await response.json()//array of posts objects
                 //2. Success
                 console.log('success')
                 dispatch(fetchCommentsSuccess(data))//action.payload=data
       }catch(error){
          dispatch(fetchCommentsError(error))//action.payload=error
       }
    }
}