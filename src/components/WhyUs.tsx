import { useState } from "react";

const WhyUs = () => {
  const [activeOption, setActiveOption] = useState(1);
  const options = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];
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
        {activeOption === 1 ? (
          <div className="bg-red-500 w-full h-52"></div>
        ) : null}
        {activeOption === 2 ? (
          <div className="bg-emerald-500 w-full h-52"></div>
        ) : null}
        {activeOption === 3 ? (
          <div className="bg-sky-600 w-full h-52"></div>
        ) : null}
        {activeOption === 4 ? (
          <div className="bg-orange-500 w-full h-52"></div>
        ) : null}
      </div>
    </section>
  );
};

export default WhyUs;
