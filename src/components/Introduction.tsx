import mainApe from "../assets/apesIMG/MainApe.png";
import { FaCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Introduction = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-14 ">
        <div className="flex flex-col text-white text-5xl font-bold text-center ">
          <h1>Start Making</h1>
          <h1>Money With</h1>
          <h1>NFTs</h1>
        </div>
        <p className="text-center text-uninportant-text mt-7 max-w-xs">
          Interested in boosting your monthly portfolio by as much as 700-1000%
          Enroll in our VIP channel now!
        </p>
        <div className="flex relative w-80 h-88">
          <img
            src={mainApe}
            alt="Image of BoredApe"
            className=" object-cover z-10 "
          />
          <div className="absolute bg-Img-background w-80 h-66 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
        </div>
      </section>
      <section className="flex justify-between w-full mt-7">
        <div className=" flex flex-col w-44 h-44 bg-Img-background rounded-lg">
          <div className="flex flex-col grow text-white text-lg px-3 py-2 ">
            <h2 className="font-medium">VIP Channel</h2>
            <div className="flex  items-center my-1">
              <div className=" hexagon text-xs h-8 w-7 font-semibold text-Custom-Grey">
                NFT
              </div>
              <p className="text-3xl ml-4 text-Light-Green">+550%</p>
            </div>
            <div className="flex flex-col grow justify-around ">
              <div>
                <div className="flex items-center">
                  <FaCheck className="bg-white rounded-full text-black p-1" />
                  <p className=" font-extralight ml-2 text-xs">
                    41% + Average ROI
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <FaCheck className="bg-white rounded-full text-black p-1" />
                  <p className="text-xs font-extralight ml-2">
                    Get Daily updates
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <FaCheck className="bg-white rounded-full text-black p-1" />
                  <p className="text-xs font-extralight ml-2">
                    NFT education program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center grow">
          <div className="flex flex-col items-center ml-9">
            <div className="flex items-center justify-center w-12 h-36 bg-Img-background rounded-full ">
              <div className=" relative h-3/4 bg-Light-Green w-1 rounded-full">
                <div className=" text-Light-Green absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="text-white mt-1 font-extralight">Scroll down</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
