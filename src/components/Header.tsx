import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className="fixed w-full  z-50  ">
      <section className="px-4 flex items-center justify-between  backdrop-blur-lg backdrop-filter py-3">
        <div className=" hexagon text-xs h-8 w-7 font-semibold ">NFT</div>
        <div className="text-3xl text-white ">
          <LuMenu />
        </div>
      </section>
    </div>
  );
};

export default Header;
