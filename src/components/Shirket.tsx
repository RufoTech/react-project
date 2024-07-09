import React from 'react'
interface companyProps{
    companyLogo:string
}
const Shirket:React.FC<companyProps> = ({companyLogo}) => {
  return (
    <div>
        <img src={companyLogo} alt="" className='py-5 my-5 w-100'/>
    </div>
  )
}

export default Shirket