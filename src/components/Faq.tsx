import mainApe from "../assets/apesIMG/MainApe.png";
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <section className="flex flex-col mt-12">
      <h3 className="text-Darker-White text-3xl uppercase font-medium">Faq</h3>
      <div className="mt-6 text-uninportant-text font-light">
        NFT FAQ is the ultimate aplha group for great & Experienced Flipping
        NFTs
      </div>
      <div className="flex relative w-80 h-88">
        <img
          src={mainApe}
          alt="Image of BoredApe"
          className=" object-cover z-10 "
        />
        <div className="absolute bg-Img-background w-80 h-66 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
      </div>
      <div className="flex flex-col mt-6 ">
        <div className="flex justify-between items-center text-Darker-White font-light text-lg border-b border-uninportant-text mb-3">
          <div className="mb-2">Who we are</div>
          <div className="text-lg mb-2">
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 ">
        <div className="flex justify-between items-center text-Darker-White font-light text-lg border-b border-uninportant-text mb-3">
          <div className="mb-2">Who we are</div>
          <div className="text-lg mb-2">
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 ">
        <div className="flex justify-between items-center text-Darker-White font-light text-lg border-b border-uninportant-text mb-3">
          <div className="mb-2">Who we are</div>
          <div className="text-lg mb-2">
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 ">
        <div className="flex justify-between items-center text-Darker-White font-light text-lg border-b border-uninportant-text mb-3">
          <div className="mb-2">Who we are</div>
          <div className="text-lg mb-2">
            <FaPlus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
