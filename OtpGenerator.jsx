import React from 'react'

const OtpGenerator = () => {

    let handleOtp = ()=>{
        let otp = (Math.random()*10000)
        let otps = Math.floor(otp)
        if(otps>1000){
            alert(`OTP:${otps}`)
        }
        else{
            otps()
        }
    }
  return (
    <>
        <h1>OPT GENERATOR</h1>
        <button onClick={handleOtp}>GENERATE OTP</button>
    </>
  )
}

export default OtpGenerator