import React from 'react'

const Error:React.FC = () => {
  return (
    <>
 
    <div className='error-bg'>
    <h1 className='text-center error-page text-light'>Page Not Found</h1>

        <img src="/assets/images/NotFound/error.svg" alt="" className='error' />
    </div>
    </>
  )
}

export default Error