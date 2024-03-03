import { BiSolidLeftArrow } from "react-icons/bi";
import BubblegumApe from "../assets/apesIMG/BubblegumApeInsights.png";

const NFTInsights = () => {
  return (
    <section className="relative flex flex-col items-center  my-12 max-w-lg px-5 md:w-full md:max-w-7xl md:px-7 md:flex-row-reverse md:justify-between md:items-end lg:items-center ">
      <div className="flex flex-col   items-center  md:max-w-lg pl-10 md:items-start">
        <div className="relative w-2/3   border-b-2 border-uninportant-text border-dashed md:w-full ">
          <div className=" text-xs absolute text-uninportant-text -top-[5px] -left-2">
            <BiSolidLeftArrow />
          </div>
        </div>
        <h3 className="text-2xl text-white font-medium text-center mt-3 md:text-4xl md:text-start">
          Game-Changer For Online Investment Strategy
        </h3>
        <p className="text-sm text-uninportant-text font-light text-center mt-3 md:text-start">
          The signals have been incredibly accurate, providing real-time alerts
          and insights that have helped me identify profitable NFTs and
          diversify my portfolio.
        </p>
        <button className="hidden md:block  bg-Light-Green  py-3 w-36 rounded-lg font-medium mt-6">
          Join our Club
        </button>
      </div>
      <div className="flex relative mr-7">
        <img
          src={BubblegumApe}
          alt="Image of BoredApe"
          className=" object-cover z-10 "
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
