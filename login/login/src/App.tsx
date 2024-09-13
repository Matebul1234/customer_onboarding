import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import { Toast } from 'primereact/toast'
import Common_form from './components/Common_form'
import Email_marketing from './components/Email_marketing'
import Data_visualization from './components/Data_visualization'
import Paid_Marketing from './components/Paid_Marketing'
import SEO from './components/SEO'
import ClientsDashboard from './components/Clients_Dashbord'
import Testcomponet from './components/Test'


function App() {
  const toast = useRef<Toast>(null);


  return (
   <>
    <Toast ref={toast} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/comonform' element={<Common_form/>}/>
      <Route path='/Emailmarketing' element={<Email_marketing/>}/>
      <Route path='/datavisualization' element={<Data_visualization/>}/>
      <Route path='/Paidmedia' element={<Paid_Marketing/>}/>
      <Route path='/seo' element={<SEO/>}/>
      <Route path='/clientdashboard' element={<ClientsDashboard/>}/>
      <Route path='/test' element={<Testcomponet/>}/>

    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
