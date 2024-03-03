import mainApe from "../assets/apesIMG/MainApe.png";
import { FaCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import arrow from "../assets/IMG/Arrow.jpg";

const Introduction = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center mt-24 px-5 md:px-7">
        <div className="w-full md:flex flex-row-reverse ">
          <div className=" w-full  flex flex-col text-white text-5xl sm:text-6xl font-bold text-center justify-between  ">
            <div className="md:hidden">
              <h1>Start Making</h1>
              <h1>Money With</h1>
              <h1>NFTs</h1>
            </div>
            <div className="relative h-max hidden md:flex md:grow justify-center  text-start md:max-w-md md:ml-14 md:text-7xl md:items-start  lg:text-8xl xl:items-end lg:max-w-xl xl:max-w-max  xl:text-9xl">
              <h1 className="mt-5">
                Start Making Money With NFTs
                <div className=" hidden xl:block absolute border border-uninportant-text w-1/2 right-28 bottom-12">
                  <div className="absolute w-2 h-2 bg-uninportant-text rotate-45 -top-[4px] -right-1"></div>
                </div>
              </h1>
            </div>
          </div>
          <div className="w-full md:max-w-80 flex flex-col  ">
            <img src={arrow} className="hidden md:block" />
            <p className="text-center text-uninportant-text mt-7 md:mt-3 md:text-left">
              Interested in boosting your monthly portfolio by as much as
              700-1000% Enroll in our VIP channel now!
            </p>
            <button className="hidden md:block  bg-Light-Green  py-3 w-36 rounded-lg font-medium mt-6">
              Join our Club
            </button>
          </div>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row justify-between w-full h-auto md:mt-7 px-5  ">
        <div className="flex relative md:w-2/5  ">
          <img
            src={mainApe}
            alt="Image of BoredApe"
            className=" object-cover z-10 "
          />
          <div className="absolute bg-Img-background w-full h-4/5 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
        </div>
        <div className="flex mt-6    md:mt-0  grow md:items-end">
          <div className="grow md:w-full  flex md:h-4/5  md:items-center md:justify-around ">
            <div className=" flex flex-col items-center w-44 h-44 bg-Img-background rounded-lg  md:w-52 md:h-52">
              <div className="flex flex-col grow text-white text-lg px-3 py-2 md:p-4">
                <h2 className="font-medium md:text-xl ">VIP Channel</h2>
                <div className="flex  items-center my-1 ">
                  <div className=" hexagon text-xs h-8 w-7 font-semibold text-Custom-Grey md:h-9 md:w-8">
                    NFT
                  </div>
                  <p className="text-3xl ml-4 text-Light-Green">+550%</p>
                </div>
                <div className="flex flex-col grow justify-around ">
                  <div>
                    <div className="flex items-center">
                      <FaCheck className="bg-white rounded-full text-black p-1" />
                      <p className=" font-extralight ml-2 text-xs md:text-sm">
                        41% + Average ROI
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <FaCheck className="bg-white rounded-full text-black p-1" />
                      <p className="text-xs font-extralight ml-2 md:text-sm">
                        Get Daily updates
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <FaCheck className="bg-white rounded-full text-black p-1" />
                      <p className="text-xs font-extralight ml-2 md:text-sm">
                        NFT education program
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  grow md:grow-0 md:mr-10">
              <div className="flex flex-col items-center ml-9 md:ml-0">
                <div className="flex items-center justify-center w-12 h-36 bg-Img-background rounded-full ">
                  <div className=" relative h-3/4 bg-Light-Green w-1 rounded-full">
                    <div className=" text-Light-Green absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </div>
                </div>
                <div className="text-white mt-1 font-extralight">
                  Scroll down
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
