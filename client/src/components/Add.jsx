import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Add() {

  const [book, setbook] = useState({
   title:"",
   desc:"",
   cover:""
  })

  
  function handlechange(e){
    setbook((prev)=>({...prev,[e.target.name]:e.target.value}))
    console.log(book);
  }
  const navigate = useNavigate();
 let  handleclick = async ()=>{
try{
    await axios.post("http://localhost:5000/books",book)
    console.log(`success`);
    navigate("/")
}catch(err){
  console.log(err);
}

 }

  return (
    <>
     <h1>Add new book here</h1>
    <div className="form"  >
      
     <input type="text" id='title' name='title' onChange={handlechange}/>
     <input type="text" id='desc'  name='desc' onChange={handlechange}/>
     <input type="text" id='cover' name='cover' onChange={handlechange}/>
     <button onClick={handleclick}>Add book</button>
    
    </div>
    </>
  )
}


export default Add