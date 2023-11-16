import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

export default function NameSearch(){
    const [person, setPerson] = useState([])
    const {subpage} = useParams()
    const [deleted, setDeleted] = useState(null)
    const [deleteId, setDeletId] =useState(null)
    const [editId, setEditId] =useState(null)
    var i = 1
    const showAllItems = async ()=>{
        await axios.get('/name/'+ subpage).then((response)=>{
            
            setPerson(response.data)
        })
        
    }
    useEffect(()=>{
        showAllItems()
    },[deleted])

    const deleteHandler = async()=>{
        await axios.post('/delete/'+ deleteId)
    }

    
if(deleteId){
    deleteHandler()
    setDeleted((deleted)=> !deleted)
    setDeletId(null)
    
} 
if(editId){
    
    return(<Navigate
     to={'/edit/'+editId} />)
    setEditId(null)  
} 


    return(<div className="" >
<div className="w-full text-center p-3 mt-4"><span className=" text-2xl text-center w-full">All Search for {subpage}</span></div>

{person.length >0 && person.map(person => (
<div className=" flex flex-col w-full mt-8 border" key={person._id}>
    <div className=" w-full p-2 bg-white flex justify-between shadow-sm z-10">
    <span className=" text-xl ">{i++} </span> <span className=" text-xl ml-3"> <span className=" font-semibold text-sm">Name:</span> {person.name}</span>
  <div className="flex gap-8">
   
   
   <div onClick={()=>setEditId(person._id)} className=" cursor-pointer">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
   </div>

  <div onClick={()=>setDeletId(person._id)} className=" cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

   </div>
  </div>
  

    </div>
    <div className=" w-full text-center flex flex-col items-start bg-blue-50 z-0">
       <div className=" border w-full flex gap-4 ">
       <span className=" font-semibold">Phone:</span> <span className=" text-xl ml-3 ">{person.phone}</span>
       </div>
      <div className=" border w-full flex gap-4 ">
       <span className=" font-semibold">Address:</span> <span className=" text-xl ml-3">{person.address}</span>
      </div>
     <div className=" border w-full flex gap-4 ">
      <span className=" font-semibold">Work:</span>  <span className=" text-xl ml-3">{person.work}</span>
     </div>
        
    </div>
</div>))}

    </div>)
}