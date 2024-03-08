import { BiSolidLeftArrow } from "react-icons/bi";
import BubblegumApe from "../assets/apesIMG/BubblegumApeInsights.png";
import { motion } from "framer-motion";
import useWindowWidth from "../CustomFunctions/useWindowWidth";
import { scrollToElement } from "../CustomFunctions/CustomScrollToElement";
import { useDispatch } from "react-redux";
import { ChangeActive } from "../ReduxToolkit/Slices/FAQ_Slice";

const NFTInsights = () => {
  const dispatch = useDispatch();
  const width = useWindowWidth();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToElement(e, href);
    setTimeout(() => {
      dispatch(ChangeActive(2));
    }, 1000);
  };

  return (
    <div className="flex  items-center flex-col  w-full">
      <section className="relative flex flex-col items-center  my-12 max-w-lg px-5 md:w-full md:max-w-7xl md:px-7 md:flex-row-reverse md:justify-between md:items-end lg:mb-20 ">
        <div className="flex flex-col   items-center  md:max-w-xl md:pl-10 md:items-start">
          <div className="relative w-2/3   border-b-2 border-uninportant-text border-dashed md:w-full ">
            <div className=" text-xs absolute text-uninportant-text -top-[5px] -left-2">
              <BiSolidLeftArrow />
            </div>
          </div>
          <div className=" text-2xl text-white font-medium text-center mt-3 md:text-4xl md:text-start lg:text-6xl">
            <motion.h2
              className="block md:hidden"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Game-Changer For Online Investment Strategy
            </motion.h2>
            <motion.div
              className="hidden md:block"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2>Game-Changer For</h2>
              <h2>Online Investment</h2>
              <div className="flex items-center">
                <h2>Strategy</h2>
                <div className=" ml-10 relative  border border-Arrow-Dark-White w-3/5 -right-0 mt-3 h-0">
                  <div className="absolute w-3 h-3 bg-Arrow-Dark-White rotate-45 -top-[6px] -right-1"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <p className="text-sm text-uninportant-text font-light text-center mt-3 md:text-start lg:mt-9 md:text-base">
            This approach is a game-changer as it harnesses the unique value
            propositions of digital assets, allowing investors to tap into
            exclusive markets, secure ownership with blockchain technology
          </p>
          <button
            className="hidden md:block  bg-Light-Green  py-3 w-36 rounded-lg font-medium mt-6 lg:mt-9"
            onClick={(e) => handleClick(e, "Faq")}
          >
            Join our Club
          </button>
        </div>
        <div className=" w-full max-w-lg flex relative md:mr-7">
          <motion.img
            src={BubblegumApe}
            alt="Image of BoredApe"
            className="w-full object-cover z-10 "
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
              duration: 1.5,
            }}
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
    </div>
  );
};

export default NFTInsights;
