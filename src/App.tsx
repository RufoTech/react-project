
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'

import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Abouts from './pages/Abouts'
import Home from './pages/Home'
import Error from './pages/Error'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Elaqe from './pages/Elaqe'
import { ToastContainer } from 'react-toastify'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    <ToastContainer/>
   
  



<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<Abouts/>}/>
  <Route path='*' element={<Error/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/elaqe' element={<Elaqe/>}/>

</Routes>
<Footer/>
    </BrowserRouter>
 
    </>
  )
}

export default App
