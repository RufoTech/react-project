import React from 'react'
interface ButtonProps{
  inTextBtn:string,
  photo:string,
  klassAdi:string
}
const button:React.FC<ButtonProps> = ({inTextBtn,photo,klassAdi}) => {
  return (
    <button className={klassAdi} > <img src={photo} alt="" className='me-2' />{inTextBtn}</button>
  )
}

export default button