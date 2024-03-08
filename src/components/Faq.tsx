import mainApe from "../assets/apesIMG/FaqApe1-Bgclear.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { ChangeActive } from "../ReduxToolkit/Slices/FAQ_Slice";
import { motion } from "framer-motion";
import useWindowWidth from "../CustomFunctions/useWindowWidth";

const Faq = () => {
  const dispatch = useDispatch();

  const activeNumber = useSelector(
    (state: RootState) => state.FAQ_Slice.ActiveNumber
  );

  const width = useWindowWidth();

  const FaqOptions = [
    {
      Title: "Who we are",
      desc: `We're a group of remote IT professionals who've crafted NFTs for enthusiasts at every level. Our goal is to unlock the NFT market for everyone, providing tools and insights for navigating this digital frontier with ease.`,
    },
    {
      Title: "How to join to our club",
      desc: "Joining our club requires purchasing one of our NFTs, your key to exclusive benefits and our NFT Educational Program. This membership not only enhances your understanding of NFTs but also integrates you into a community of like-minded individuals.",
    },
    {
      Title: "Join  NFT Educational Program",
      desc: "Our program offers a deep dive into the NFT world, from basics to advanced strategies. Membership grants access to educational resources, community events, and insider tips, setting you up for success in the NFT market.",
    },
    {
      Title: "Plans for future",
      desc: "We're expanding our NFT collection and developing APE Coin, aimed at diversifying our offerings and strengthening our community. As a special incentive, NFT holders will receive APE Coins worth $500, further enhancing the value of membership.",
    },
  ];
  return (
    <div className="flex  items-center flex-col w-full">
      <section
        className="w-full flex flex-col md:items-center md:justify-between md:flex-row mt-12 max-w-lg px-5 md:px-7 md:max-w-7xl lg:items-start "
        id="Faq"
      >
        <div className="md:flex-col md:w-1/2 md:max-w-ms md:pr-10">
          <h3 className="text-Darker-White text-3xl uppercase font-medium md:text-4xl">
            Faq
          </h3>
          <div className="mt-6 text-uninportant-text font-light md:mt-3">
            NFT FAQ is the ultimate aplha group for great & Experienced Flipping
            NFTs
          </div>
          <div className="md:w-full md:max-w-sm flex relative md:-mt-5 ">
            <motion.img
              src={mainApe}
              alt="Image of BoredApe"
              className="object-cover z-10"
              initial={{
                x: width >= 1024 ? -200 : -100,
                opacity: 0,
              }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5,
              }}
            />
            <div className="absolute bg-Img-background w-full h-4/5 bottom-0 left-1/2 transform -translate-x-1/2 rounded-lg"></div>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0 grow lg:mt-12 ">
          {FaqOptions.map((Faq, id) => (
            <div key={id}>
              <div className="  flex flex-col   text-Darker-White font-light text-xl md:text-2xl border-b border-uninportant-text mb-3 ">
                <div className="flex   justify-between items-center w-full">
                  <div className="mb-1 ">{Faq.Title}</div>
                  <div className="text-lg mb-1 cursor-pointer">
                    {activeNumber === id + 1 ? (
                      <FaMinus onClick={() => dispatch(ChangeActive(0))} />
                    ) : (
                      <FaPlus onClick={() => dispatch(ChangeActive(id + 1))} />
                    )}
                  </div>
                </div>
                <div
                  className={`flex items-center   transition-all duration-75 overflow-hidden mb-2   ${
                    activeNumber === id + 1 ? `h-auto` : ` h-0`
                  }`}
                >
                  <div
                    className={` overflow-hidden transition-all duration-75 text-uninportant-text text-xs font-light lg:text-sm  ${
                      activeNumber === id + 1
                        ? ` opacity-100 translate-y-0`
                        : ` opacity-0 -translate-y-full`
                    }`}
                  >
                    <div className="md:max-w-md ">{Faq.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
