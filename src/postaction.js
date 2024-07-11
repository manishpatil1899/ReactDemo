import { fetchPostError, fetchPostRequest, fetchPostSuccess } from "./postreducer"

export function postAction(){
    //return a async function - asynchronous call
    return async (dispatch)=>{
       //1. making a request - pending (initiating the request)
       console.log('request')
       dispatch(fetchPostRequest())//state :{loading:true,posts:[],error:null}
       try{
                 let response=await fetch('https://jsonplaceholder.typicode.com/posts')
                 let data=await response.json()//array of posts objects
                 //2. Success
                 console.log('success')
                 dispatch(fetchPostSuccess(data))//action.payload=data
       }catch(error){
          dispatch(fetchPostError(error))//action.payload=error
       }
    }
}