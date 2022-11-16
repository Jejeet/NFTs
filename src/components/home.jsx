import React from "react";
import Nav from "./nav";
import Image3 from "../images/image 3.png";
import Image4 from "../images/image 4.png";
import Image5 from "../images/image 5.png";
import Image6 from "../images/image 6.png";
import MBToken from "../images/mbtoken.png";
import Metamask from "../images/metamask.png";
import Opensea from "../images/opensea.png";
import Imagelist from "../Utils/Imagelist";
import Card from "./Card";
import Foot from "../images/foot.png";

import Metabnb from "../images/Footer1.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/insta.png";
import Footer from "../images/footer.png";

const home = () => {
  return (
   
    <div className="home ">
      
      
      <Nav />

      <div className=" px-8 py-8 lg:flex flex-row  justify-between gap-12 ">
        <div className="flex flex-col justify-between pt-12">
          <div className="text-[3rem] md: w-[30rem]">
          
              {" "}
             <p className="whitespace-nowrap">Rent a <span className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r  from-[#A02279] to-[#A02279] ">Place</span> away from{" "}</p> 
             <p> <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-[#A02279] to-[#A02279]">Home</span> in the{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-[#A02279] to-[#A02279] ">Metaverse</span></p> 
          
          </div>

          <div className="">
            <p className=" text-xl font-light ">
              We provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
          </div>

          <div className="flex mr-4 h-[3rem]" >
           
              <input type="text" placeholder="Search for location"  className="w-full px-4 border border-[#A3A3A3] placeholder:text-gray-400 focus:outline-none focus:border focus:border-[#A02279]"/>
              <button className="py-5 px-20 text-white bg-gradient-to-r from-[#A02279] to-[#A02279] ">Search</button>
            
          </div>
        </div>

        <div className="flex gap-3 md:hidden">
          <div>
            <div className="h-16"> </div>
            <div className="w-[13rem] h-[11rem]">
              <img src={Image4} alt="" />
            </div>
            <div className="w-[13rem] h-[11rem]">
              <img src={Image6} alt="" />
            </div>
          </div>

          <div>
            <div className="w-[13rem] h-[11rem]">
              <img src={Image3} alt="" />
            </div>
            <div className="w-[13rem] h-[11rem]">
              <img src={Image5} alt="" />
            </div>
            <div className="h-16"></div>
          </div>
        </div>
      </div>

      {/* the tokens */}
      <div className="w-full bg-gradient-to-r from-[#A02279] to-[#A02279] flex justify-between px-8 py-4 my-12">
        <div>
          <img src={MBToken} alt="" />
        </div>
        <div>
          <img src={Metamask} alt="" />
        </div>
        <div>
          <img src={Opensea} alt="" />
        </div>
      </div>
      {/* the second part of the page that contains a heding and cards */}

      <div>

        <header className="text-center text-5xl my-8">Inspiration for your next adventure</header>
        {/* the main card boxes */}
        <div className="mx-auto px-6">
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-3 ">
          {/* each card has its div here */}
         
        {Imagelist.slice(0,8).map((image,id)=> {
          return <div key={id} className="mx-auto"><Card image={image} /></div>
        })}
             
         </div>
      </div>
      </div>
      {/* the last div  */}

      <div className="h-[80vh] w-full bg-gradient-to-r from-[#A02279] to-[#A02279] px-12 ">
        {/* the essay */}
        <div className="grid grid-cols-2 gap-4 py-24 ">
        <div>
          <header> Metabnb NFTs</header>
          <div>
            {" "}
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </div>
         
          <button> Learn more</button>
          
        </div>

        {/* the pictures */}
        <div className="  justify-center  items-center">
          <img src={Foot} alt="" className="w-[32rem]"/>

        {/* <div className="relative items-center">
          <div className="absolute top-3 left-20   w-[20.5rem] h-[15.836rem] "> <img src={Image21} alt=""/> </div>
          <div className="absolute top-40 right-0 left-0 bottom-0  w-[20.5rem] h-[15.836rem] z-10"><img src={Image22} alt=""/></div>
          <div className="absolute top-[11rem] right-0 left-30 bottom-0  w-[20.5rem] h-[15.836rem] z-20"><img src={Image23} alt=""/></div>
        </div> */}
        </div>

        </div>

      </div>



      {/* the footer div */}
      <div className=" bg-[#1D1D1E] h-[18rem]" >

        {/* the links and logo */}
        <div className="flex flex-row justify-between text-white px-12">
          <div>
            <div className="py-8">
              {" "}
              <img src={Metabnb} alt="" />
            </div>
            <div className="flex pt-16 ">
              <img src={Facebook} alt=""  className="px-4"/>
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
 
  );
};

export default home;
