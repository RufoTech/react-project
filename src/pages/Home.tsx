import React from 'react'
import Introduction from '../components/Introduction'
import Shirketler from '../components/Shirketler'
import Deeplearning from '../components/Deeplearning'
import Awards from '../components/Awards'
import About from '../components/About'

const Home:React.FC = () => {
  return (
    <>
 <Introduction/>
<Shirketler/>
<Deeplearning/>
<Awards/>
<About/>

</>
  )
}

export default Home