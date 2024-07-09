import React from 'react'
import Button from './Button'


const Deeplearning:React.FC = () => {
  return (
    <div className="deep-learning py-5 ">
        <div className="container">
            <div className="row">
                <div className="deep-left-side col-12 col-md-6">
                    <img src="/assets/images/deeplearning/deeplearning.svg" alt="" className='w-100' />
                </div>
                <div className="deep-right-side col-12 col-md-6 ">
                <h1 className='text-light deep-h1'>Apply AI, Deep Learning <br /> and Data Sciece to solve</h1>
                <p className='deep-paraqraf py-3'>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
                <Button inTextBtn='Learn More' klassAdi='deep-learning-btn' photo=""/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Deeplearning