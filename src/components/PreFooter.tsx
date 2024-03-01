import mainApe from "../assets/apesIMG/FaqApe-Bgclear.png";

const PreFotter = () => {
  return (
    <section className="  justify-center flex flex-col  mt-12">
      <div className=" flex  items-center  flex-col max-w-lg px-5">
        <h3 className="text-3xl text-Darker-White">
          Take Your NFT Investment To the Next Level?
        </h3>
        <p className="text-uninportant-text mt-6 font-light">
          Take your NFT ultimate alpha group for beginner and experienced
          flipping NFTs.
        </p>
      </div>
      <div className=" mt-20 mr-5">
        <div className="relative w-full rounded-r-full h-44 bg-Light-Green ">
          <img
            src={mainApe}
            className="w-64 z-10 absolute right-11 -top-20 transform  scale-x-[-1]"
          />
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <button className="px-8 py-2 border border-Light-Green  text-Light-Green rounded-md flex  mt-9 font-medium">
          Join Chat
        </button>
      </div>
    </section>
  );
};

export default PreFotter;
