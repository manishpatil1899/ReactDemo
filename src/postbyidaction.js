import { fetchPostByIdError, fetchPostByIdRequest, fetchPostByIdSuccess } from "./postbyidredcuer"
export function postByIdAction(id){
    //return a async function - asynchronous call
    return async (dispatch)=>{
       //1. making a request - pending (initiating the request)
       dispatch(fetchPostByIdRequest())//state :{loading:true,posts:[],error:null}
       try{
                 let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                 let data=await response.json()//array of posts objects
                 //2. Success
                 dispatch(fetchPostByIdSuccess(data))//action.payload=data
       }catch(error){
          dispatch(fetchPostByIdError(error))//action.payload=error
       }
    }
}