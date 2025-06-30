import React, { useRef, useState } from 'react'

const QrGenerator = () => {
    let inputval = useRef()
    let [qrcode , setQrcode] = useState()

    let handleQr = ()=>{
        event.preventDefault()
        let inputField = inputval.current.value
        let apiUrl = (`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputField}`)
        setQrcode(apiUrl)
    }
  return (
    <>
        <h1>Q R CODE GENERATOR</h1>
        <form onSubmit={handleQr}>
            <input type="text" placeholder='enter text' ref={inputval}/>
            <button>GENERATE QR</button>
        </form>
        <img src={qrcode} alt="" />
    </>
  )
}

export default QrGenerator