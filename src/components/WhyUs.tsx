import RichApe from "../assets/apesIMG/RichMonkeyIntroduction.png";
import NetworkingApe from "../assets/apesIMG/MillionareNetworkingMonkeyIntroduction.png";
import PartyApe from "../assets/apesIMG/PartyMonekyIntroduction.png";
import ArmyApe from "../assets/apesIMG/ArmyMonkeyIntroduction.png";

import { useState } from "react";

const WhyUs = () => {
  const [activeOption, setActiveOption] = useState(1);
  const options = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];
  const OptionComponents = [
    {
      id: 1,
      desc: (
        <div>
          Boost your portfolio with our NFTs, promising an annual ROI of 41%
        </div>
      ),
      img: (
        <div className="grow flex items-center md:justify-end md:ml-5">
          <img
            src={RichApe}
            className="md:w-full md:max-w-md object-cover grow  rounded-3xl my-6"
          />
        </div>
      ),
    },
    {
      id: 2,
      desc: <div>Our NFTs grant access to members only events.</div>,
      img: (
        <div className="grow flex items-center md:justify-end md:ml-5">
          <img
            src={PartyApe}
            className="md:w-full md:max-w-md object-cover grow  rounded-3xl my-6"
          />
        </div>
      ),
    },
    {
      id: 3,
      desc: (
        <div>Our NFTs are your gateway to networking with millionaires</div>
      ),
      img: (
        <div className="grow flex items-center md:justify-end md:ml-5">
          <img
            src={NetworkingApe}
            className="md:w-full md:max-w-md object-cover grow  rounded-3xl my-6 "
          />
        </div>
      ),
    },
    {
      id: 4,
      desc: (
        <div>
          Protect your assets with our NFTs, designed for unmatched security.
        </div>
      ),
      img: (
        <div className="grow flex items-center md:justify-end md:ml-5 ">
          <img
            src={ArmyApe}
            className="md:w-full md:max-w-md object-cover grow  rounded-3xl my-6 "
          />
        </div>
      ),
    },
  ];
  const ActiveOption = () => {
    return OptionComponents.find((e) => e.id === activeOption);
  };
  return (
    <div className=" w-full md:flex md:justify-center items-center bg-Light-Grey mt-16">
      <section className="bg-Light-Grey w-full flex items-center justify-center  ">
        <div className="w-full flex flex-col md:flex-row justify-center items-center max-w-lg md:max-w-7xl  px-5 md:px-7  md:my-6 lg:justify-between">
          <div className="flex flex-col self-start max-w-lg  mt-6">
            <h3 className="text-3xl font-medium text-white">
              The Ultimate NFT Signals AlphaGrup
            </h3>
            <p className="mt-3 text-uninportant-text font-light">
              NFT Signals is the ultimate alpha group for beginner and
              experienced traders to make profit flipping NFTs.
            </p>
            <div className="flex justify-around w-full mt-6 border-neutral-800 border-b-2 mb-6">
              {options.map((option) => (
                <div
                  onClick={() => setActiveOption(option.number)}
                  className={`${
                    activeOption === option.number
                      ? `border-Light-Green`
                      : `border-Lighter-Grey`
                  } cursor-pointer transition-all border-2 flex justify-center items-center text-2xl text-white h-14 w-14 rounded-full bg-Lighter-Grey mb-3`}
                  key={option.number}
                >
                  {option.number}
                </div>
              ))}
            </div>
            <div className="hidden md:flex flex-col  text-uninportant-text font-light  ">
              <div className="">{ActiveOption()?.desc}</div>
            </div>
          </div>
          <div className="flex flex-col  text-uninportant-text font-light  ">
            <div className="md:hidden">{ActiveOption()?.desc}</div>
            {ActiveOption()?.img}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
