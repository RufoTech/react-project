import React, {useRef} from 'react'
import Button from './Button'
import { FaBars,FaRegWindowClose } from "react-icons/fa";



const Header:React.FC = () => {
  const casusElement=useRef<HTMLDivElement>(null)
  
  const navbariAc= () => {
  if(casusElement.current){
    casusElement.current.classList.add("aktiv")
  }
  }
  const navbariBagla = () =>{
    if(casusElement.current){
      casusElement.current.classList.remove("aktiv")
    }
  }
  return (
    
  <>
  <div className="mobile-menu" ref={casusElement}>
    <FaRegWindowClose className='text-white closeicon' onClick={navbariBagla}/>
    <nav className="mobile-links">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Blogs</a>
      <a href="">Services</a>
      <a href="">Contacts</a>
      <Button inTextBtn="Sign In" photo="" klassAdi="sign-in my-3"/>

    </nav>
  </div>
    <nav className="navbar navbar-expand-lg my-background ">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="/assets/images/header/header.svg" alt="" className='foto' />
      </a>
      <button onClick={navbariAc} className="navbar-toggler text-white"  type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FaBars/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
          <li className="nav-item">
            <a className="nav-link px-3 text-light " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 text-light" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 text-light" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 text-light" href="#">Blog</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link px-4 text-light " aria-disabled="true">Contact</a>
          </li>
        </ul>

     <Button inTextBtn="Sign In" photo="" klassAdi="sign-in"/>
    
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header