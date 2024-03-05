import mainApe from "../assets/apesIMG/FaqApe-Bgclear.png";
import { scrollToElement } from "../CustomFunctions/CustomScrollToElement";

const PreFotter = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToElement(e, href);
  };
  return (
    <section className="  justify-center flex flex-col  mt-12  md:max-w-7xl md:w-full md:mb-12">
      <div className=" flex md:hidden  items-center  flex-col max-w-lg px-5 md:max-w-7xl">
        <h3 className="text-3xl text-Darker-White ">
          Take Your NFT Investment To the Next Level?
        </h3>
        <p className="text-uninportant-text mt-6 font-light">
          Are you convinced? Dive into NFT Bored Ape Club, join us, and start
          earning in the vibrant and lucrative world of NFT trading.
        </p>
      </div>
      <div className=" mt-20 mr-5 w-full">
        <div className="relative w-full rounded-r-full h-44 bg-Light-Green md:h-80 ">
          <img
            src={mainApe}
            className="w-64 z-10 absolute right-11 -top-20 transform  scale-x-[-1] md:w-full md:max-w-108 md:right-20 md:-top-[7rem]"
          />
          <div className="hidden max-w-xs md:flex  items-start  flex-col h-full ml-7  justify-center ">
            <h3 className=" text-Custom-Grey font-bold text-4xl">
              Take Your NFT Investment To the Next Level?
            </h3>
            <p className="text-gray-950 mt-3 ">
              Are you convinced? Dive into NFT Bored Ape Club, join us, and
              start earning in the vibrant and lucrative world of NFT trading.
            </p>

            <button
              className="px-8 py-3 border-2 border-Custom-Grey  text-Custom-Grey rounded-md flex   mt-6 font-bold"
              onClick={(e) => handleClick(e, "NFTs")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="  flex  md:hidden justify-center">
        <button
          className="px-8 py-2 border border-Light-Green  text-Light-Green rounded-md flex  mt-9 font-medium"
          onClick={(e) => handleClick(e, "NFTs")}
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default PreFotter;
