import React from 'react'
import Nav from './nav'
import Card from "./Card";
import Imagelist from "../Utils/Imagelist";
import Metabnb from "../images/Footer1.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/insta.png";
import Footer from "../images/footer.png";
import Setting from "../images/setting-5.png"

const Accomodation = () => {
  return (
    <div>
        <Nav/>
        <header className='py-8'>
            <ul className='flex justify-between px-9'>
                <li><a href="">Resturance</a> </li>
                <li><a href="">Cottage</a></li>
                <li><a href="">Castle</a></li>
                <li><a href="">Fantast city</a></li>
                <li><a href="">Beach</a></li>
                <li><a href="">Carbins</a></li>
                <li><a href="">Off-grid</a></li>
                <li><a href="">Farm</a></li>
                <li>
                    <button className='flex '>
                        <span>location</span>
                        <span className='px-3'><img src={Setting} alt="" /></span>
                    </button>
                </li>
            </ul>
        </header>

        <div>


        <div className="mx-auto px-6">
        <div className="grid grid-cols-4 gap-y-6 gap-x-3 ">
          {/* each card has its div here */}
         
        {Imagelist.map((image,id)=> {
          return <div key={id} className="mx-auto"><Card image={image} /></div>
        })}
             
         </div>
      </div>
       
 </div>

 <div className=" bg-[#1D1D1E] h-[18rem] mt-10" >

        {/* the links and logo */}
        <div className="flex flex-row justify-between text-white px-12">
          <div>
            <div className="py-8">
              {" "}
              <img src={Metabnb} alt="" />
            </div>
            <div className="flex pt-16 ">
              <img src={Facebook} alt="" className="px-4"/>
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" className="px-4" />
            </div>
          </div>

          <div className="">
            <p className="py-8">Community</p>
            <ul className="">
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <p className="py-8">Places</p>
            <ul>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div>
            <p className="py-8">About us</p>
            <ul >
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>


        <footer className="py-12">
          <p>
            <img src={Footer} alt="" />
          </p>
        </footer>
      </div>
        
             
          
      
      
      
      
     

    </div>
  )
}

export default Accomodation