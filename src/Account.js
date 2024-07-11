import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import { deposit, withdraw } from "./bankaccreducer"
function Account(){
    let [input,setInput]=useState(0)
    let account=useSelector((state)=>state.bankAccount)
    
    let dispatch=useDispatch()
    return(<>
    <b>Enter amount</b><input type="text" value={input} 
    onChange={(event)=>setInput(event.target.value)}></input>
     {account.balance}
     <button onClick={()=>dispatch(withdraw(Number(input)))}>withdraw</button>
     <button onClick={()=>dispatch(deposit(Number(input)))}>deposit</button>
     {account.error && <p style={{color:'red'}}>{account.error}</p>}
    </>)
}
export default Account