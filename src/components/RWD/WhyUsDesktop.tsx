import RichApe from "../../assets/apesIMG/RichMonkeyIntroduction.png";
import NetworkingApe from "../../assets/apesIMG/MillionareNetworkingMonkeyIntroduction.png";
import PartyApe from "../../assets/apesIMG/PartyMonekyIntroduction.png";
import ArmyApe from "../../assets/apesIMG/ArmyMonkeyIntroduction.png";

import { useState } from "react";

const WhyUsDesktop = () => {
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
        <div className="grow flex items-center justify-end ml-7 my-6">
          <img
            src={RichApe}
            className="w-full max-w-md object-cover grow  rounded-3xl "
          />
        </div>
      ),
    },
    {
      id: 2,
      desc: <div>Our NFTs grant access to members only events.</div>,
      img: (
        <div className="grow flex items-center justify-end ml-7 my-6">
          <img
            src={PartyApe}
            className="w-full max-w-md object-cover grow  rounded-3xl "
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
        <div className="grow flex items-center justify-end ml-7 my-6">
          <img
            src={NetworkingApe}
            className="w-full max-w-md object-cover grow  rounded-3xl "
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
        <div className="grow flex items-center justify-end ml-7 my-6">
          <img
            src={ArmyApe}
            className="w-full max-w-md object-cover grow  rounded-3xl "
          />
        </div>
      ),
    },
  ];
  const ElementWeWant = () => {
    return OptionComponents.find((e) => e.id === activeOption);
  };
  console.log(ElementWeWant());

  return (
    <section className=" w-full flex  justify-center my-6  px-5 md:px-7 lg:max-w-7xl">
      <div className="flex flex-col  max-w-lg   mt-6">
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
              key={option.number}
            >
              {option.number}
            </div>
          ))}
        </div>
        <div className="flex flex-col text-uninportant-text font-light ">
          {ElementWeWant()?.desc}
        </div>
      </div>
      {ElementWeWant()?.img}
    </section>
  );
};

export default WhyUsDesktop;
