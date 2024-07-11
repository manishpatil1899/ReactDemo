import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./bookreducer";

function Book()
{
    let books =useSelector((state)=>state.books);
    let dispatch = useDispatch();
    let initialValue = {'title':'','price':'','author':''}
    let [book,setBook]=useState(initialValue)
    const handleChange=(event)=>{
        const{name,value}=event.target
        setBook({...book,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addBook({id:Date.now(),title:book.title,price:book.price,author:book.author}));  
    }
    return(
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <label htmlFor="title">Enter book title</label>
                <input type="text" id="title" name ="title" value={book.title} onChange={(event)=>handleChange(event)}></input><br></br>
                <label htmlFor="price">Enter book's price</label>
                <input type="text" id="price" name ="price" value={book.price} onChange={(event)=>handleChange(event)}></input><br></br>
                <label htmlFor="author">Enter book's author</label>
                <input type="text" id="author" name ="author" value={book.author} onChange={(event)=>handleChange(event)}></input><br></br>
                <input type="submit" value="Submit"></input>
                <ol>
                    {books && books.map((book)=>
                    <li>{book.title}&nbsp;&nbsp;{book.author}&nbsp;&nbsp;{book.price}&nbsp;&nbsp;</li>
                    )}
                </ol>
            </form>
        </div>
    )
}
export default Book;