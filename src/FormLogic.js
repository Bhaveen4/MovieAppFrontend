import React from 'react'
import { useState } from 'react'

const useForm = (book) => {
    var [val, setval] = useState(book);
  return [val,(event)=> {
    setval({
        ...val,[event.target.name]: event.target.value,
    });
  }]
   
  
}

export default useForm
