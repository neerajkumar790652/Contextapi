import React, { useContext } from 'react'
import E from './E'
import MyContext from '../MyContext'
const D = () => {
       const {sendData}    =      useContext(MyContext)
       console.log(sendData)
  return (
    <div>
      D components
      <h2>Data Comes from A Components :{sendData}</h2>
      <E/>
    </div>
  )
}

export default D
