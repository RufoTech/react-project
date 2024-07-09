import React from 'react'
import Button from './Button'
import { ReactTyped } from "react-typed";

const Introduction:React.FC = () => {
  return (
   <section className="introduction ">
    <div className="container">
    <div className="row">
        <div className="intro-left-side col-12 col-md-6">
            <h6 className='next-platform mb-4 '>NEXT GENERATION PLATFORM</h6>
            <ReactTyped className='h1 text-light npm-text'
      strings  = {[
        "Artificial Intelligence",
        "Cyber Security",
        "React Typescript",
      ]}
      typeSpeed={40}
      backSpeed={50}
    
      loop
    >
      
    </ReactTyped>
            
            <p className='py-4  introduction-paraqraf'>Lorem ipsum is placeholders text commonly used in the <br /> graphic,print, and  publishing industries for previewing <br /> layouts and  visual mockups.</p>
             <div className="btn-groups d-flex gap-2 ">
                <Button inTextBtn="Get Started" photo="" klassAdi="get-started "/>
                <Button inTextBtn="Watch Video" photo="/assets/images/introduction/play.svg" klassAdi="watch-video"/>
             </div>
        </div>
        <div className="intro-right-side col-md-6">
            <img src="/assets/images/introduction.svg" alt="" className='w-100' />
           
        </div>
    </div>
    </div>
   </section>
  )
}

export default Introduction