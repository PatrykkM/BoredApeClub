import { LuMenu } from "react-icons/lu";

const Header = () => {
  const Nav = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Faq",
    },
    {
      name: "Blog",
    },
    {
      name: "Work",
    },
  ];
  return (
    <div className="fixed w-full  z-50  md:max-w-7xl">
      <section className="px-5 flex items-center justify-between backdrop-blur-lg backdrop-filter py-4">
        <div className="hexagon text-xs h-8 w-7 font-semibold md:h-10 md:w-9 md:text-sm md:font-bold">
          NFT
        </div>
        <div className="flex-grow flex justify-center items-center">
          <ul className="hidden md:flex text-Darker-White w-96 bg-Lighter-Grey justify-around items-center rounded-full h-12">
            {Nav.map((li) => (
              <li className="cursor-pointer">{li.name}</li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <div className="hidden w-full md:flex justify-center">
            <button className="px-3 py-2 border border-Light-Green rounded-md flex font-light text-sm">
              Join Now
            </button>
          </div>
          <div className="md:hidden text-3xl">
            <LuMenu />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
