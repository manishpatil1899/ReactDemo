import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { postAction } from './postaction'
import { Link } from 'react-router-dom'
function Posts(){
    //loading:false to loading:true, posts:[],error:null
    //loading:true to loading:false, posts:[] to posts:action.payload, error:null to error:null
    let {loading,posts,error}=useSelector((state)=>state.postRequest)
    let dispatch=useDispatch()
    useEffect(()=>{
       dispatch(postAction())
    },[dispatch])
    return(<>
    {loading && 'Loading'}<br></br>
    {error && 'Error'}<br></br>
    <ol>
    {posts.map((post)=><li key={post.id}>&nbsp;&nbsp;&nbsp;
        <Link to={`/post/${post.id}`}>{post.title}</Link></li>)}
    </ol>
    </>)
}
export default Posts
//Component Posts -> postAction -> postreducer (fetchPostRequest,fetchPostSuccess) -> Store (state change) 
//-> Rerender the component Posts