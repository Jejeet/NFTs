import React from 'react'
import { useState } from 'react';
import house from "../images/house.png";
import logo from "../images/logo.png";
import Modal from './modal';

function Nav() {

  const linksArray = [
    {
      link: "#",
      content: "Home",
      
    },
    {
      link: "/place",
      content: "place to stay",
      
    },
    {
      link: "#",
      content: "NFT",
     
    },
    {
      link: "#",
      content: "Community",
     
    },
  ]
  const [isModalOpen,setIsModalOpen]= useState(false);
  
  return (
    <div >
      <div className='Nav flex justify-between mx-8 my-8 items-end' >
      
      
      
          <div className='logo flex' >
                <img src = {house} alt="" className=''/>
                <img src = {logo} alt="" />
           </div >

           <div className ="links flex justify-between gap-8 md:block hidden" >
        {linksArray.map((links, id) => {
          return (<a
            href={links.link}
            target="_blank"
            rel="noreferrer"
            key={id}
          >
            {links.content}
          </a>
        );
      })}
           </div>
            <div> <button onClick={()=> setIsModalOpen(true)} className='bg-gradient-to-r from-[#A02279] to-[#A02279] rounded text-white p-2 '>connect wallet </button></div>
    </div>
    {isModalOpen && <Modal />}
    </div>
  )
}

export default Nav;