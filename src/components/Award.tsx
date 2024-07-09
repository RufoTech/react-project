import React from 'react'
interface MukafatProps{
awardTitle:string;
awardImg:string;
awardParaqraf:string
}
const Award:React.FC<MukafatProps> = ({awardTitle,awardImg,awardParaqraf}) => {
  return (
    <div className='award-card  '>
      
  <img src={awardImg} className="card-img-top" alt="..."/>
  <div className="card-body text-center ">
    <h2 className="card-title py-4">{awardTitle}</h2>
    <p className="card-text">{awardParaqraf}</p>
  </div>
      
    </div>
  )
}

export default Award