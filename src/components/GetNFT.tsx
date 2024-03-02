import Ape1 from "../assets/apesIMG/Ape1.png";
import Ape2 from "../assets/apesIMG/ape2.png";
import Ape3 from "../assets/apesIMG/ape3.png";
import Ape4 from "../assets/apesIMG/ape4.png";
import Ape5 from "../assets/apesIMG/RomeMonkey.png";
import Ape6 from "../assets/apesIMG/ape6.png";
import Ape7 from "../assets/apesIMG/ape7.png";
import Ape8 from "../assets/apesIMG/ape8.png";
import Ape9 from "../assets/apesIMG/ape9.png";
import Ape10 from "../assets/apesIMG/ape10.png";
import Ape11 from "../assets/apesIMG/ape11.png";
import Ape12 from "../assets/apesIMG/Ape12.png";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

import { useState } from "react";

const GetNFT = () => {
  const [active, setActive] = useState(true);
  const allNFT = [
    { Img: Ape1, ApeID: "Ape#1231", Price: 72343, Subtitle: "Angry" },
    { Img: Ape2, ApeID: "Ape#1232", Price: 52343, Subtitle: "Sad" },
    { Img: Ape3, ApeID: "Ape#1233", Price: 82343, Subtitle: "Happy" },
    { Img: Ape4, ApeID: "Ape#1234", Price: 62343, Subtitle: "Excited" },
    { Img: Ape5, ApeID: "Ape#1235", Price: 42343, Subtitle: "Pensive" },
    { Img: Ape6, ApeID: "Ape#1236", Price: 92343, Subtitle: "Surprised" },
    { Img: Ape7, ApeID: "Ape#1237", Price: 22343, Subtitle: "Scared" },
    { Img: Ape8, ApeID: "Ape#1238", Price: 32343, Subtitle: "In Love" },
    { Img: Ape9, ApeID: "Ape#1239", Price: 12343, Subtitle: "Curious" },
    { Img: Ape10, ApeID: "Ape#1240", Price: 72340, Subtitle: "Joyful" },
    { Img: Ape11, ApeID: "Ape#1241", Price: 52340, Subtitle: "Mysterious" },
    { Img: Ape12, ApeID: "Ape#1242", Price: 82340, Subtitle: "Rebellious" },
  ];

  return (
    <section className="  flex  justify-center items-center bg-Light-Grey w-full  ">
      <div className=" relative flex flex-col  items-center justify-center  max-w-lg  md:max-w-7xl p-5 md:px-2">
        <h2 className="text-3xl text-Darker-White font-medium mt-4">
          Get Our NFT here
        </h2>
        <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6">
          NFT Signals is the ultimate alpha group for beginner and experienced
          traders to make profit flipping NFTs.
        </p>
        <div className=" w-full  flex flex-wrap mt-3 mb-12 justify-center ">
          {allNFT.map((NFT, id) => (
            <div
              className={`w-1/2 md:w-1/3 mt-4  md:p-4 max-w-76 grow ${
                (id + 1) % 2 === 0 ? `pl-2` : `pr-2`
              } ${id > 5 && active ? `hidden` : null} `}
            >
              <div className="transition-all bg-Lighter-Grey  w-full flex flex-col rounded-lg p-2 ">
                <img
                  src={NFT.Img}
                  className="object-cover transition-all h-36 xs:h-auto  md:max-h-64 w-full  rounded-lg "
                />
                <div className="flex w-full justify-between items-center text-white  mt-3 text-sm ">
                  <div className="font-light">{NFT.ApeID}</div>
                  <div>{(NFT.Price / 3500).toFixed(1)}ETH</div>
                </div>
                <div className="flex w-full justify-between text-uninportant-text text-xs font-light mt-1">
                  <div>{NFT.Subtitle}</div>
                  <div>{NFT.Price} $</div>
                </div>
                <button className="w-full py-2 border-Light-Green border text-white font-light rounded-lg mt-2">
                  <p className="mb-px ">Buy Now</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden flex justify-center items-center h-12 w-12 bg-main-background absolute -bottom-6 rounded-full border-2 border-Light-Green">
          <div className="text-Light-Green " onClick={() => setActive(!active)}>
            {active ? (
              <div className="text-5xl animate-bounce">
                <IoIosArrowRoundDown />
              </div>
            ) : (
              <div className="text-3xl ">
                <FaEthereum />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNFT;
