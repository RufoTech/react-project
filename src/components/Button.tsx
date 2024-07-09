import React from 'react'
interface ButtonProps{
  inTextBtn:string,
  photo:string,
  klassAdi:string
}
const button:React.FC<ButtonProps> = ({inTextBtn,photo,klassAdi}) => {
  return (
    <button className={klassAdi} > <img src={photo} alt="" />{inTextBtn}</button>
  )
}

export default button