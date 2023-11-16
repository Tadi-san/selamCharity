import axios from "axios"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
export default function RegistrationPage(){
   const [lang, setLang] = useState('አማር')
   const [name, setName] = useState('')
   const [address, setAddress] = useState('')
   const [phone, setPhone] = useState('')
   const [work, setWork] = useState('')
   const [temezgbual, setTemezgbual] = useState(null)
   const [registered, setRegistered] = useState(null)

async function register(ev){
ev.preventDefault()

  await axios.post('/register', {name, address, phone, work}).then((res)=>console.log(res))
  setRegistered(true)
  setTemezgbual(true)
}



   if (lang == 'አማር'){

    if (temezgbual){
      return(
        <Navigate to={'/msgana'} />
      )
    }


    return(
        <div  className=" flex flex-col items-center p-2 bg-slate-50 min-h-screen" >
        <div className=" flex justify-between mt-4 w-full px-1 bg-transparent items-center mb-5">
        <div className=" w-fit flex flex-col justify-center items-center">
        <span className=" font-semibold text-blue-400 text-2xl ">ሰላም</span>
       <span className=" font-extralight text-sm">በጎ አድራጎት</span>
        </div> 
        <select value={lang} onChange={e => setLang(e.target.value)} className=" p-2 rounded-2xl shadow-sm border">
          <option>አማር</option>
          <option>Eng</option>
        </select>
        </div>
        <h2 className=" text-2xl mb-3 mt-8">የምዝገባ ቅጽ</h2>
            <form className=" w-11/12 bg-white rounded-lg p-2 md:w-1/2 lg:w-1/4 shadow-sm" onSubmit={register} >
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">እባኮን ስሞን ያስገቡ</h2>
                <input className=" p-1 rounded-md"
                placeholder="Abebe Bekele" 
                required
                value={name}
                onChange={e=>setName(e.target.value)}
                type="text" />
                <span className=" text-red-500 text-xs hidden">* ያስገቡት ስም ስህተት ነው</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">እባኮን የስልክ ቁጥሮን ያስገቡ</h2>
                <input className=" p-1 rounded-md"
                placeholder="09..." 
                required
                value={phone}
                onChange={e=>setPhone(e.target.value)}
                type="number"
                 />
                <span className=" text-red-500 text-xs hidden">* ያስገቡት ቁጥር ስህተት ነው</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">እባኮን አድራሻዎትን ያስገቡ</h2>
                <input className=" p-1 rounded-md"
                placeholder="addis ababa, ...." 
                required
                value={address}
                onChange={e=>setAddress(e.target.value)}
                type="text" />
                <span className=" text-red-500 text-xs hidden">* ያስገቡት አድራሻ ስህተት ነው</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">ምን የስራ/ሙያ ዘርፍ ላይ ነው ሚሰሩት ?</h2>
                <input className=" p-1 rounded-md"
                placeholder="የፀጉር ስራ ባለሙያ . . ." 
                required
                value={work}
                onChange={e=>setWork(e.target.value)}
                type="text" />
                <span className=" text-red-500 text-xs hidden">* ያስገቡት ስራ ስህተት ነው</span>
              </div>
              <div className="w-full flex justify-center">
              <button className=" bg-blue-400 py-2 px-4 mt-3 text-white font-semibold rounded-2xl ">ተመዝገብ</button>
              </div>
              
            </form>
        </div>
    )
   }
   if(lang == "Eng"){

    if (registered){
      return(
        <Navigate to={'/msgana'} />
      )
    }


    return(
        <div  className=" flex flex-col items-center p-2 bg-slate-50 min-h-screen" >
        <div className=" flex justify-between mt-4 w-full px-1 bg-transparent items-center mb-5">
        <div className=" w-fit flex flex-col justify-center items-center">
        <span className=" font-semibold text-blue-400 text-2xl ">Selam</span>
       <span className=" text-sm">Charity</span>
        </div>
        <select value={lang} onChange={e => setLang(e.target.value)} className=" p-2 border rounded-2xl shadow-sm">
          <option>አማር</option>
          <option>Eng</option>
        </select>
        </div>
        <h2 className=" text-2xl mb-3 mt-8">Registration Form</h2>
            <form className=" w-11/12 bg-white rounded-lg p-2 md:w-1/2 lg:w-1/4 shadow-sm" onSubmit={register} >
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">Please input your name</h2>
                <input className=" p-1 rounded-md"
                placeholder="Abebe Bekele" 
                type="text" 
                required
                value={name}
                onChange={e=>setName(e.target.value)}
                />
                <span className=" text-red-500 text-xs hidden">* name is invaid</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">Please input your Phone number</h2>
                <input className=" p-1 rounded-md"
                placeholder="09..." 
                type="tel" 
                required
                value={phone}
                onChange={e=>setPhone(e.target.value)}
                />
                <span className=" text-red-500 text-xs hidden">* phone number is invaid</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">Please input your address</h2>
                <input className=" p-1 rounded-md"
                placeholder="addis ababa, ...." 
                required
                value={address}
                onChange={e=>setAddress(e.target.value)}
                type="text" />
                <span className=" text-red-500 text-xs hidden">* address is invaid</span>
              </div>
              <div className=" flex flex-col gap-3 mt-3 p-2">
              <h2 className=" font-semibold">Please input your line of work</h2>
                <input className=" p-1 rounded-md"
                placeholder="wood shop owner..." 
                type="text"
                required
                value={work}
                onChange={e=>setWork(e.target.value)} />
                <span className=" text-red-500 text-xs hidden">* line of work is invaid</span>
              </div>
              <div className="w-full flex justify-center">
              <button className=" bg-blue-400 py-2 px-4 mt-3 text-white font-semibold rounded-2xl ">Submit</button>
              </div>
              
            </form>
        </div>
    )
}}