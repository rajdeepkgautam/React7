import React, { createContext, useState } from 'react'

export const store =createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Baburao",
"Age":"27",
"Course":"MEAN",
"Batch":"2021",
"id":"1"

},

{

"Name":"Shyam",
"Age":"26",
"Course":"MERN",
"Batch":"2021",
"id":"1"
    
},

{

"Name":"Raju",
"Age":"25",
"Course":"AI",
"Batch":"2021",
"id":"1"
        
    },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail;