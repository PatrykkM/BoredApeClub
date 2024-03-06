import { IoIosArrowRoundDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNFT } from "../ReduxToolkit/Slices/My_NFT_Slice";
import { singleProduct } from "../ReduxToolkit/Slices/My_NFT_Slice";
import { ItemBought } from "../ReduxToolkit/Slices/CurrentBalance_Slice";
import { RootState } from "../ReduxToolkit/store";
import { DataProccesing } from "../ReduxToolkit/Slices/All_NFTs_Slice";
import { ErrorBuyingNFT } from "../ReduxToolkit/Slices/My_NFT_Slice";

const GetNFT = () => {
  const dispatch = useDispatch();
  const allNFT = useSelector((state: RootState) => state.All_NFTS.products);
  const MyNFT = useSelector((state: RootState) => state.HandleNFT.products);

  const WindowWidth = window.innerWidth;

  const [active, setActive] = useState(true);

  const CurrentBalance = useSelector(
    (state: RootState) => state.CurrentBalance_Slice.Balance
  );
  const IsOwned = (e: string) => {
    const AllNFTsItems = (e: string) => {
      const item = allNFT.find((item) => item.ApeID === e);
      return item?.ApeID;
    };
    const MyNFTsItem = (e: string) => {
      const item = MyNFT.find((item) => item.ApeID === e);
      return item?.ApeID;
    };
    if (AllNFTsItems(e) !== MyNFTsItem(e)) {
      return true;
    } else return false;
  };

  const HandleBuyNFT = (e: singleProduct, price: number, ApeID: string) => {
    dispatch(DataProccesing(ApeID));
    setTimeout(() => {
      if (CurrentBalance >= price && IsOwned(ApeID)) {
        dispatch(ItemBought(price));
        dispatch(AddNFT(e));
        dispatch(DataProccesing(ApeID));
      } else {
        dispatch(ErrorBuyingNFT(true));
        setTimeout(() => {
          dispatch(ErrorBuyingNFT(false));
        }, 2000);
        dispatch(DataProccesing(ApeID));
      }
    }, 2000);
  };

  return (
    <section
      className="  flex  justify-center items-center bg-Light-Grey w-full "
      id="NFTs"
    >
      <div className=" relative flex flex-col  items-center justify-center  max-w-lg  md:max-w-7xl p-5 md:px-2">
        <h2 className="text-3xl text-Darker-White font-medium mt-4 md:text-4xl md:font-semibold lg:text-6xl">
          Get Our NFT here
        </h2>
        <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6 md:max-w-md md:text-base">
          NFT Signals is the ultimate alpha group for beginner and experienced
          traders to make profit flipping NFTs.
        </p>
        <div className=" w-full  flex flex-wrap mt-3 mb-12 justify-center ">
          {allNFT.map((NFT, id) => (
            <div
              className={`w-1/2 md:w-1/3 mt-4  md:p-4 max-w-76  ${
                (id + 1) % 2 === 0 ? `pl-2` : `pr-2`
              } ${
                (id > 5 && active && WindowWidth <= 1024) ||
                (id > 7 && active && WindowWidth >= 1024)
                  ? `hidden`
                  : null
              } `}
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
                  className="w-full py-2 border-Light-Green border text-white font-light rounded-lg mt-2 md:mt-4 transition-all"
                  onClick={() => HandleBuyNFT(NFT, NFT.Price, NFT.ApeID)}
                >
                  {IsOwned(NFT.ApeID) ? (
                    NFT.Processing ? (
                      <div className="flex items-center justify-center">
                        <p className="mb-px">Buying</p>
                        <div className="ml-2 border-2 border-t-2 border-Light-Green h-4 w-4 rounded-full animate-spin border-t-transparent"></div>
                      </div>
                    ) : (
                      <p className="mb-px">Buy Now</p>
                    )
                  ) : (
                    <p className="font-medium">Owned</p>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden flex justify-center items-center h-12 w-12 bg-main-background absolute -bottom-6 rounded-full border-2 border-Light-Green cursor-pointer">
          <div className="text-Light-Green " onClick={() => setActive(!active)}>
            {active ? (
              <div className="text-5xl animate-bounce">
                <IoIosArrowRoundDown />
              </div>
            ) : (
              <div className="text-3xl ">
                <FaEthereum />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetNFT;
