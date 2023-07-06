import React, { useContext } from 'react'
import B from './B'
import MyContext from '../MyContext'


const A = () => {
      const   {data,setData,setSendData} =   useContext(MyContext)
  return (
    <div>
      A components
      <br></br>
      <br/>

      <input type="text" placeholder='enter the name' onChange={(e)=>{setData(e.target.value)}}/>
      <button onClick={()=>{setSendData(data)
               setData("")
    }}>Send Data</button>
      <B/>
    </div>
  )
}

export default A
