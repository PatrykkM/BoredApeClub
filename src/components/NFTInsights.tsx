import { BiSolidLeftArrow } from "react-icons/bi";
import BubblegumApe from "../assets/apesIMG/BubblegumApeInsights.png";

const NFTInsights = () => {
  return (
    <section className="relative flex flex-col items-center  my-12 max-w-lg px-5 md:w-full md:max-w-7xl md:px-7 md:flex-row-reverse md:justify-between md:items-end lg:mb-20 ">
      <div className="flex flex-col   items-center  md:max-w-xl md:pl-10 md:items-start">
        <div className="relative w-2/3   border-b-2 border-uninportant-text border-dashed md:w-full ">
          <div className=" text-xs absolute text-uninportant-text -top-[5px] -left-2">
            <BiSolidLeftArrow />
          </div>
        </div>
        <div className=" text-2xl text-white font-medium text-center mt-3 md:text-4xl md:text-start lg:text-6xl">
          <h2 className="block md:hidden">
            Game-Changer For Online Investment Strategy
          </h2>
          <div className="hidden md:block">
            <h2>Game-Changer For</h2>
            <h2>Online Investment</h2>
            <div className="flex items-center">
              <h2>Strategy</h2>
              <div className=" ml-10 relative  border border-Arrow-Dark-White w-3/5 -right-0 mt-3 h-0">
                <div className="absolute w-3 h-3 bg-Arrow-Dark-White rotate-45 -top-[6px] -right-1"></div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-uninportant-text font-light text-center mt-3 md:text-start lg:mt-9 md:text-base">
          The signals have been incredibly accurate, providing real-time alerts
          and insights that have helped me identify profitable NFTs and
          diversify my portfolio.
        </p>
        <button className="hidden md:block  bg-Light-Green  py-3 w-36 rounded-lg font-medium mt-6 lg:mt-9">
          Join our Club
        </button>
      </div>
      <div className=" w-full max-w-lg flex relative md:mr-7">
        <img
          src={BubblegumApe}
          alt="Image of BoredApe"
          className="w-full object-cover z-10 "
        />
        <div className="absolute bg-Img-background w-full h-4/5 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
      </div>
      <div className="w-full relative flex items-center justify-center mt-9 md:hidden">
        <button className=" bg-Light-Green  py-3 px-6 rounded-xl font-medium">
          Join our Club
        </button>
        <div className=" absolute border border-uninportant-text w-1/5 right-1">
          <div className="absolute w-2 h-2 bg-uninportant-text rotate-45 -top-[4px] -right-1"></div>
        </div>
      </div>
    </section>
  );
};

export default NFTInsights;
