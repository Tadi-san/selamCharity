
import RegistrationPage from "./regestration"
import { Route, Routes } from "react-router-dom"
import AdminPage from "./admin"
import axios from "axios"
import Mesgana from "./thanks/msganapage"
import NameSearch from "../search/namesearch"
import PhoneSearch from "../search/phonesearch"
import AddressSearch from "../search/addresssearch"
import WorkSearch from "../search/worksearch"
import { UserContextProvider } from "./usercontext"
import LoginPage from "./LoginPage"
import EditPage from "../search/edit"

export default function App() {
  axios.defaults.baseURL = "https://selam-charity-for-better-future.vercel.app/"
 axios.defaults.withCredentials = true
  
  return (
    <UserContextProvider>

    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path="/msgana" element={<Mesgana />} />
      <Route path="/name/:subpage" element ={<NameSearch />} />
      <Route path="/phone/:subpage" element ={<PhoneSearch />} />
      <Route path="/address/:subpage" element ={<AddressSearch />} />
      <Route path="/work/:subpage" element={<WorkSearch />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/edit/:subpage" element={<EditPage />} />
    </Routes>
   
    </UserContextProvider>
  )
}


