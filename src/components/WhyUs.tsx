const WhyUs = () => {
  const options = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
  ];
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
        <div className="flex justify-around w-full mt-6 border-gray-600 border-b-2">
          {options.map((option) => (
            <div className="border-green-400 border-2 flex justify-center items-center text-2xl text-white h-14 w-14 rounded-full bg-Lighter-Grey">
              {option.number}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WhyUs;
