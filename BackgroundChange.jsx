import React, { useRef } from 'react'
import '../assets/styles/backgroundchange.css'

const BackgroundChange = () => {
    let colorChange = useRef()
    let changeColor = ()=>{
        event.preventDefault()
        // console.log(colorChange.current[0].value)

        document.body.style.background = colorChange.current[0].value
        
    }
    // changeColor()

    let resetColor = ()=>{
        document.body.style.background = 'white'
    }
  return (
    <>
        <div className="background">
            <h1>BACLGROUND CHANGING</h1>
            <div className="container">
                <form ref={colorChange}>
                    <label>ENTER THE COLOUR YOU WANT TO CHANGE:</label><br /><br />
                    <input type="text" placeholder='enter the color'/><br /><br />
                    <button onClick={changeColor}>SUBMIT</button>
                    <button onClick={resetColor}>RESET</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default BackgroundChange