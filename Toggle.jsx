import React, { useState } from 'react'
import '../assets/styles/toggle.css'

const Toggle = () => {
    let [bool , setBool] = useState(!true)
    let handleClick = ()=>{
        setBool(!bool)
        document.body.style = `${bool ? 'background:white ; color: black' : 'background:black ; color: white'}`
    }
  return (
    <>
        <h1>{bool ? 'DARK MODE' : 'LIGHT MODE'}</h1>
        <button onClick={handleClick}>{bool ? 'LIGHT' : 'DARK'}</button>
    </>
  )
}

export default Toggle