import React from 'react'
import { useState } from 'react';
import { v4 } from 'uuid'

const Form = ({SubmitForm}) => {
  const[title, setTitle]=useState("")
  const[author, setAuthor]=useState("")
  let uuid =v4();

  const handleSubmit=(e)=>{
    e.preventDefault();
    SubmitForm(title, author, uuid);
  
  }

  return ( 
  <>
    <form onSubmit={handleSubmit}>

      <input type="text" 
      placeholder="Enter your title" 
      onChange={(e)=>{setTitle(e.target.value)}} 
      value={title} />

      <input type="text" 
      placeholder="Enter an author" 
      onChange={(e)=>{setAuthor(e.target.value)}}  
      value={author}/>

      <button value='submit'>Submit</button>

    </form>
    
  </>
    
   );
}
 
export default Form;