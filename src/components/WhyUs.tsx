import RichApe from "../assets/apesIMG/RichMonkeyIntroduction.png";
import NetworkingApe from "../assets/apesIMG/MillionareNetworkingMonkeyIntroduction.png";
import PartyApe from "../assets/apesIMG/PartyMonekyIntroduction.png";
import ArmyApe from "../assets/apesIMG/ArmyMonkeyIntroduction.png";

import { useState } from "react";

const WhyUs = () => {
  const [activeOption, setActiveOption] = useState(1);
  const options = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];
  const optionComponents: { [index: number]: JSX.Element } = {
    1: (
      <div className="flex flex-col  text-uninportant-text font-light w-80 h-100 ">
        <div>
          Boost your portfolio with our NFTs, promising an annual ROI of 41%
        </div>
        <div className="grow flex items-center ">
          <img
            src={RichApe}
            className=" object-cover  w-80 h-80 rounded-3xl flex-grow"
          />
        </div>
      </div>
    ),

    2: (
      <div className="flex flex-col text-uninportant-text font-light w-80 h-100">
        <div>Our NFTs grant access to members only events.</div>
        <div className="grow flex items-center ">
          <img
            src={PartyApe}
            className=" object-cover  w-80 h-80 rounded-3xl flex-grow"
          />
        </div>
      </div>
    ),
    3: (
      <div className="flex flex-col text-uninportant-text font-light w-80 h-100">
        <div>Our NFTs are your gateway to networking with millionaires</div>
        <div className="grow flex items-center ">
          <img
            src={NetworkingApe}
            className=" object-cover  w-80 h-80 rounded-3xl flex-grow"
          />
        </div>
      </div>
    ),
    4: (
      <div className="flex flex-col text-uninportant-text font-light w-80 h-100">
        <div>
          Protect your assets with our NFTs, designed for unmatched security.
        </div>
        <div className="grow flex items-center ">
          <img
            src={ArmyApe}
            className=" object-cover  w-80 h-80 rounded-3xl flex-grow"
          />
        </div>
      </div>
    ),
  };
  return (
    <section className="bg-Light-Grey w-full flex items-center justify-center mt-12">
      <div className="flex flex-col justify-center items-center w-80 mt-6">
        <h3 className="text-3xl font-medium text-white">
          The Ultimate NFT Signals AlphaGrup
        </h3>
        <p className="mt-3 text-uninportant-text font-light">
          NFT Signals is the ultimate alpha group for beginner and experienced
          traders to make profit flipping NFTs.
        </p>
        <div></div>
        <div className="flex justify-around w-full mt-6 border-neutral-800 border-b-2 mb-6">
          {options.map((option) => (
            <div
              onClick={() => setActiveOption(option.number)}
              className={`${
                activeOption === option.number
                  ? `border-Light-Green`
                  : `border-Lighter-Grey`
              }   transition-all border-2 flex justify-center items-center text-2xl text-white h-14 w-14 rounded-full bg-Lighter-Grey mb-3`}
            >
              {option.number}
            </div>
          ))}
        </div>
        {optionComponents[activeOption]}
      </div>
    </section>
  );
};

export default WhyUs;
