import mainApe from "../assets/apesIMG/FaqApe1-Bgclear.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { ChangeActive } from "../ReduxToolkit/Slices/FAQ_Slice";

const Faq = () => {
  const dispatch = useDispatch();
  const activeNumber = useSelector(
    (state: RootState) => state.FAQ_Slice.ActiveNumber
  );
  const FaqOptions = [
    {
      Title: "Who we are",
      desc: "Who we are Who we are Who we are ",
    },
    {
      Title: "How to join to our club",
      desc: "How to join to our club How to join to our club How to join to our club",
    },
    {
      Title: "Join  NFT Educational Program",
      desc: "Participate in our NFT Educational Program al Program al Program al Program al Program",
    },
    {
      Title: "Plans for future",
      desc: "Plans for future Plans for future Plans for future Plans for future Plans for future",
    },
  ];
  return (
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
          <img
            src={mainApe}
            alt="Image of BoredApe"
            className=" object-cover z-10 "
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
                  activeNumber === id + 1 ? `h-10` : ` h-0`
                }`}
              >
                <div
                  className={` overflow-hidden transition-all duration-75 text-uninportant-text text-xs font-light  ${
                    activeNumber === id + 1
                      ? ` opacity-100 translate-y-0`
                      : ` opacity-0 -translate-y-full`
                  }`}
                >
                  <div>{Faq.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
