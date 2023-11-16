
import {Link, Navigate} from "react-router-dom"
import React, { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./usercontext"

export default function LoginPage (){
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [redirect, setRedirect] = useState(null)
const {setUser} = useContext(UserContext)

async function loginHandler(ev){
   try{
    ev.preventDefault()
   const {data} = await axios.post('/login', {name, password})
   setUser(data)
   setRedirect(true)

   }
   catch(e){

   }
}

if(redirect){
  return <Navigate to={'/admin'} />
}


    return(
    <div className="mt-4 grow flex flex-col items-center ">
    <div className="mb-5 w-full ">
    <h1 className=" text-4xl text-center my-4">Login</h1>
    <form className=" flex flex-col mx-auto w-10/12 mt-10 md:w-1/3" onSubmit={loginHandler} >
    <input type="text"
    value={name}
     placeholder="admin name"
     onChange={(ev) => {setName(ev.target.value)}}
     required
     className=" p-3 rounded-xl mb-4"
      />
        <input type ="password" 
        placeholder="password"
        required
        value={password}
        className=" p-3 rounded-xl mb-4 "
        onChange={(ev)=>{setPassword(ev.target.value)}}
        />
        <button type="submit" className=" bg-blue-400 py-2 px-4 mt-3 text-white font-semibold rounded-2xl ">Login</button>

    </form> </div>
    </div>)
}