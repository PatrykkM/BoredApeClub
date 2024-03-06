import { useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
const MyNFTsPage = () => {
  const MyNFTs = useSelector((state: RootState) => state.HandleNFT.products);
  return (
    <section
      className="w-full  flex  justify-center items-center bg-Light-Grey   min-h-screen mt-[72px]"
      id="NFTs"
    >
      <div className="w-full relative flex flex-col  items-center justify-center  max-w-lg  md:max-w-7xl p-5 md:px-2">
        {MyNFTs.length <= 0 ? (
          <>
            <h2 className="text-3xl text-Darker-White font-medium mt-4 md:text-4xl md:font-semibold lg:text-6xl">
              You dont have any NFT
            </h2>
            <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6 md:max-w-md md:text-base">
              Go to home page and buy your first NFT!
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl text-Darker-White font-medium mt-4 md:text-4xl md:font-semibold lg:text-6xl">
              Your NFTs
            </h2>
            <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6 md:max-w-md md:text-base">
              These are the NFTs that you have bought
            </p>
          </>
        )}

        <div className=" w-full  flex flex-wrap mt-3 mb-12 justify-center ">
          {MyNFTs.map((NFT, id) => (
            <div
              className={`  w-1/2 md:w-1/3 mt-4  md:p-4 max-w-76  ${
                (id + 1) % 2 === 0 ? `pl-2` : `pr-2`
              }  `}
            >
              <div className="transition-all bg-Lighter-Grey  w-full flex flex-col rounded-lg p-2 ">
                <img
                  src={NFT.Img}
                  className="object-cover transition-all h-36 xs:h-auto  md:max-h-64 w-full  rounded-lg "
                />
                <div className="flex w-full justify-between items-center text-white  mt-3 text-sm md:text-base ">
                  <div className="font-light">{NFT.ApeID}</div>
                  <div>{(NFT.Price / 3500).toFixed(1)}ETH</div>
                </div>
                <div className="flex w-full justify-between text-uninportant-text text-xs font-light mt-1 md:text-sm">
                  <div>{NFT.Subtitle}</div>
                  <div>{NFT.Price} $</div>
                </div>
                <button
                  className="w-full py-2 border-Light-Green border text-white font-light rounded-lg mt-2 md:mt-4"
                  onClick={() => 2}
                >
                  <p className="mb-px ">Sell now</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyNFTsPage;
