import ArmyApe from "../assets/apesIMG/ArmyMonkeyIntroduction.png";

const GetNFT = () => {
  return (
    <section className="flex  justify-center items-center bg-Light-Grey w-full">
      <div className="flex flex-col w-80 items-center justify-center">
        <h2 className="text-3xl text-white font-medium mt-4">
          Get Our NFT here
        </h2>
        <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6">
          NFT Signals is the ultimate alpha group for beginner and experienced
          traders to make profit flipping NFTs.
        </p>
        <div className="w-full flex ">
          <div className="w-1/2 pr-2">
            <div className=" bg-Lighter-Grey  w-full flex flex-col rounded-lg p-2 ">
              <img
                src={ArmyApe}
                className=" object-cover  w-full h-36 rounded-lg"
              />
              <div className="flex w-full justify-between items-center text-white  mt-3 ">
                <div className="font-extralight">Ape#1231</div>
                <div className="font-light">3.4ETH</div>
              </div>
              <div className="flex w-full justify-between text-uninportant-text text-sm font-light mt-1">
                <div>Angry</div>
                <div>1922 usd</div>
              </div>
              <button className="w-full py-2 border-Light-Green border text-white font-light rounded-lg mt-2">
                <p className="mb-px">Buy Now</p>
              </button>
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <div className=" bg-Lighter-Grey  w-full flex flex-col rounded-lg p-2 ">
              <img
                src={ArmyApe}
                className=" object-cover  w-full h-44 rounded-lg"
              />
              <div className="flex w-full justify-between items-center text-white  mt-3 ">
                <div className="font-extralight">Ape#1231</div>
                <div className="font-light">3.4ETH</div>
              </div>
              <div className="flex w-full justify-between text-uninportant-text text-sm font-light mt-1">
                <div>Angry</div>
                <div>1922 usd</div>
              </div>
              <button className="w-full py-2 border-Light-Green border text-white font-light rounded-lg mt-2">
                <p className="mb-px">Buy Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNFT;
