import { IoIosArrowRoundDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowWidth from "../CustomFunctions/useWindowWidth";
import { AddNFT } from "../ReduxToolkit/Slices/My_NFT_Slice";
// import { ErrorSpamingNFT } from "../ReduxToolkit/Slices/My_NFT_Slice";
import { singleProduct } from "../ReduxToolkit/Slices/My_NFT_Slice";
import { ItemBought } from "../ReduxToolkit/Slices/CurrentBalance_Slice";
import { RootState } from "../ReduxToolkit/store";
import { DataProccesing } from "../ReduxToolkit/Slices/All_NFTs_Slice";
import { ErrorBuyingNFT } from "../ReduxToolkit/Slices/My_NFT_Slice";
import { motion } from "framer-motion";

const GetNFT = () => {
  const dispatch = useDispatch();
  const allNFT = useSelector((state: RootState) => state.All_NFTS.products);
  const MyNFT = useSelector((state: RootState) => state.HandleNFT.products);
  const width = useWindowWidth();

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

  const IsProcessingNFT = () => {
    let proccessingNFT = allNFT.find(
      (processing) => processing.Processing === true
    );
    if (proccessingNFT === undefined) {
      return false;
    } else return true;
  };
  console.log();
  const HandleBuyNFT = (e: singleProduct, price: number, ApeID: string) => {
    if (IsProcessingNFT() === false) {
      dispatch(DataProccesing(ApeID));
      setTimeout(() => {
        if (CurrentBalance >= price && IsOwned(ApeID)) {
          dispatch(ItemBought(price));
          dispatch(AddNFT(e));
          dispatch(DataProccesing(ApeID));
        } else {
          dispatch(ErrorBuyingNFT(true));
          dispatch(DataProccesing(ApeID));
          setTimeout(() => {
            dispatch(ErrorBuyingNFT(false));
          }, 2000);
        }
      }, 3000);
    } else {
      ////      dispatch(ErrorSpamingNFT(true));
      //    setTimeout(() => {
      //       dispatch(ErrorSpamingNFT(false));
      //     }, 2000);
    }
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="  flex  justify-center items-center bg-Light-Grey w-full "
      id="NFTs"
    >
      <div className=" relative flex flex-col  items-center justify-center  max-w-lg  md:max-w-7xl p-5 md:px-2">
        <motion.h2
          className="text-3xl text-Darker-White font-medium mt-4 md:text-4xl md:font-semibold lg:text-6xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Get Our NFT here
        </motion.h2>
        <p className="text-sm text-uninportant-text text-center mt-4 font-light leading-6 md:max-w-md md:text-base">
          NFT Signals is the ultimate alpha group for beginner and experienced
          traders to make profit flipping NFTs.
        </p>
        <motion.div
          className=" w-full  flex flex-wrap mt-3 mb-12 justify-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allNFT.map((NFT, id) => (
            <motion.div
              className={`w-1/2 md:w-1/3 mt-4  md:p-4 max-w-76  ${
                (id + 1) % 2 === 0 ? `pl-2` : `pr-2`
              } ${
                (id > 5 && active && width < 1280) ||
                (id > 7 && active && width >= 1280)
                  ? `hidden`
                  : null
              } `}
              variants={childVariants}
              key={NFT.ApeID}
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

                {IsOwned(NFT.ApeID) ? (
                  NFT.Processing ? (
                    <div className="flex items-center justify-center w-full h-11 border-Light-Green border text-white font-light rounded-lg mt-2 md:mt-4 transition-all">
                      <p className="mb-px">Buying</p>
                      <div className="ml-2 border-2 border-t-2 border-Light-Green h-4 w-4 rounded-full animate-spin border-t-transparent"></div>
                    </div>
                  ) : (
                    <button
                      className="w-full h-11 border-Light-Green border text-white font-light rounded-lg mt-2 md:mt-4 transition-all"
                      onClick={() => HandleBuyNFT(NFT, NFT.Price, NFT.ApeID)}
                    >
                      <p className="mb-px">Buy Now</p>
                    </button>
                  )
                ) : (
                  <div className="flex items-center justify-center w-full h-11 border-Light-Green border text-white font-light rounded-lg mt-2 md:mt-4 transition-all">
                    <p className="font-medium">Owned</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
