import React from 'react'
import Wallet from "../images/wallet.png";

const modal = () => {
  return (
    <div className='w-full'>
    <div className=" fixed z-10 top-[16.5rem] right-[20rem]">
     <img src={Wallet} alt="" className='w-[30rem]'/>

    </div>
    </div>
  )
}

export default modal;