import { BiSolidLeftArrow } from "react-icons/bi";
import BubblegumApe from "../assets/apesIMG/BubblegumApeInsights.png";

const NFTInsights = () => {
  return (
    <section className="flex flex-col items-center  mt-12 mb-12">
      <div className="relative w-11/12 border-b-2 border-uninportant-text border-dashed ">
        <div className=" text-xs absolute text-uninportant-text -top-[5px] -left-2">
          <BiSolidLeftArrow className="" />
        </div>
      </div>
      <h3 className="text-2xl text-white font-medium text-center mt-3">
        Game-Changer For Online Investment Strategy
      </h3>
      <p className="text-sm text-uninportant-text font-light text-center mt-3">
        The signals have been incredibly accurate, providing real-time alerts
        and insights that have helped me identify profitable NFTs and diversify
        my portfolio.
      </p>
      <div className="flex relative w-80 h-88 -mt-5">
        <img
          src={BubblegumApe}
          alt="Image of BoredApe"
          className=" object-cover z-10 "
        />
        <div className="absolute bg-Img-background w-80 h-66 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
      </div>
      <div className="w-full relative flex items-center justify-center mt-9">
        <button className="flex justify-center items-center bg-Light-Green  py-3 px-6 rounded-xl font-medium">
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
