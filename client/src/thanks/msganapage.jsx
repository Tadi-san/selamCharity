import { useState } from "react"
import { Navigate, redirect, useSearchParams } from "react-router-dom"

export default function Mesgana(){
 const  [redirect, setRedirect] = useState(null)

   if(redirect){
    return(<Navigate to={'/'} />)
   }


    return(
    <div>
    <div className="grid place-items-center h-screen w-full bg-slate-700">
        <div className="bg-white flex-col w-11/12 h-1/2 flex items-center justify-evenly rounded-lg relative">
            <h2 className=" text-center">le erdatawo enamesegnalen 
            bekrbu yemndewlelot yhonal 
            </h2>
            <button onClick={()=> setRedirect(true)} className=" absolute -bottom-5 py-3 px-5 bg-slate-300 rounded-3xl shadow-sm">chers</button>
        </div>
        

    </div>
    </div>)
}