import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

export default function EditPage(){
    const [person, setPerson] = useState('')
    const {subpage} = useParams('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [work, setWork] = useState('')
    const [redirect, setRedirect] =useState(null)
    const [load, setLoad] = useState(null)

    useEffect(()=>{
    axios.get('/'+subpage).then(response => {
        setPerson(response.data)
    })
    setName(person.name)
    setAddress(person.address)
    setPhone(person.phone)
    setWork(person.work)

    },[load])

    async function editHandler(ev){
        ev.preventDefault()
        await axios.post('/'+subpage, {name, phone, address, work})
        setRedirect(true)
    }

    function refresh(ev){
        ev.preventDefault()
        setLoad(true)
    }
    if(redirect){
        return(<Navigate to={'/admin'} />)
    }

    return(<div className=" flex flex-col justify-center items-center">
        <div className=" mt-10 mb-5">
            <h2 className=" text-center text-3xl font-semibold">Edit File</h2>
        </div>
        <form className=" w-11/12 bg-white rounded-lg p-2 md:w-1/2 lg:w-1/4 shadow-sm mt-10 border" onSubmit={editHandler} >
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">inputed name</h2>
                <input className=" p-1 rounded-md"
                type="text" 

                value={name}
                onChange={e=>setName(e.target.value)}
                />
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">inputed  Phone number</h2>
                <input className=" p-1 rounded-md"
                type="tel" 

                value={phone}
                onChange={e=>setPhone(e.target.value)}
                />
                <span className=" text-red-500 text-xs hidden">* phone number is invaid</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">inputed  address</h2>
                <input className=" p-1 rounded-md"

                value={address}
                onChange={e=>setAddress(e.target.value)}
                type="text" />
                <span className=" text-red-500 text-xs hidden">* address is invaid</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">inputed  line of work</h2>
                <input className=" p-1 rounded-md"
                type="text"

                value={work}
                onChange={e=>setWork(e.target.value)} />
                <span className=" text-red-500 text-xs hidden">* line of work is invaid</span>
              </div>
              <div className="w-full flex justify-center">
              <button type="submit" className=" bg-blue-400 py-2 px-4 mt-3 text-white font-semibold rounded-2xl ">Edit</button>
            </div>
            <button onClick={refresh} className=" flex p-2 bg-blue-400 text-white rounded-3xl"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg> get data
</button>
           </form>
              
    </div>)
}