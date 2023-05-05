import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


function Book() {
  
  const [books, setbooks] = useState([])

   const navigate = useNavigate()

  useEffect(() => {
    const fetchAllbooks = async () =>{
      try{
        const result = await axios.get("http://localhost:5000/books");
        let final = result.data;
        setbooks(final)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchAllbooks()
  }, [])
  

 function handleDelete(e){
  const id = e;
  axios.delete(`http://localhost:5000/books/${id}`)
  navigate("/")
  window.location.reload()
 }


  return (
    <>
     <h1>
     book Store
     </h1>{
    
     }
    {
    books.map((book)=>{
      return (
         <div className="maindiv" key={book.idbook}>
    <img src={book.cover} alt="bookimage" />
     <h2>{book.title}</h2>
     <p>{book.desc}</p>
      <button onClick={()=>handleDelete(book.idbook)}>Delete from here</button>
    </div>
      )
    })

    }
    <button>
      <Link to={"/add"}>Add new</Link>
    </button>
    </>
  )
}

export default Book