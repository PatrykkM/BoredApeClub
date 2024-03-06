import { LuMenu } from "react-icons/lu";
import { scrollToElement } from "../CustomFunctions/CustomScrollToElement";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
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
      name: "NFTs",
    },
  ];
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href;
    if (location.pathname !== "/BoredApeClub/") {
      navigate("/BoredApeClub/", { state: { scrollTo: targetId } });
    } else {
      scrollToElement(e, href);
    }
    setActive(!active);
  };
  let CurrentBalance = useSelector(
    (state: RootState) => state.CurrentBalance_Slice.Balance
  );
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="flex  items-center flex-col max-w-lg">
      <div className="fixed w-full  z-50  ">
        <section className=" flex  grow  items-center justify-center backdrop-blur-lg backdrop-filter ">
          <div className="relative md:max-w-7xl px-5 flex grow items-center justify-between  py-4 md:px-7">
            <div className="hexagon text-xs h-8 w-7 font-semibold md:h-10 md:w-9 md:text-sm md:font-bold">
              NFT
            </div>
            <div className=" hidden md:flex  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="flex text-Darker-White  bg-Lighter-Grey justify-around items-center rounded-full h-12  font-extralight">
                {Nav.map((li, id) => (
                  <li
                    className={`cursor-pointer  ${
                      id === Nav.length - 1 ? `px-10` : `pl-10`
                    }`}
                    key={li.name}
                  >
                    <Link
                      onClick={(e) => handleClick(e, li.name)}
                      className="hover:text-Light-Green transition-all"
                      to={"/"}
                    >
                      {li.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {active ? (
              <div className="fixed right-5 top-20 flex flex-col items-center text-white md:hidden w-36  bg-Light-Grey rounded-md  shadow-2xl">
                <div className="  md:flex justify-center items-center mt-2">
                  <Link to={"BoredApeClub/MyNFTs"}>
                    <button className="text-Light-Green" onClick={handleActive}>
                      {location.pathname === "/BoredApeClub/MyNFTs" ? (
                        <p>{CurrentBalance} $</p>
                      ) : (
                        <p>My NFTs</p>
                      )}
                    </button>
                  </Link>
                </div>
                {Nav.map((li) => (
                  <li key={li.name} className="list-none py-2">
                    <a
                      onClick={(e) => handleClick(e, li.name)}
                      className="hover:text-Light-Green transition-all "
                    >
                      {li.name}
                    </a>
                  </li>
                ))}
              </div>
            ) : null}

            <div className="text-white">
              <div className="hidden w-full md:flex justify-center">
                <Link to={"BoredApeClub/MyNFTs"}>
                  <button className="px-3 py-2 border  border-Light-Green rounded-md flex font-light text-sm">
                    {location.pathname === "/BoredApeClub/MyNFTs" ? (
                      <p>{CurrentBalance} $</p>
                    ) : (
                      <p>My NFTs</p>
                    )}
                  </button>
                </Link>
              </div>
              <div className="md:hidden text-3xl" onClick={handleActive}>
                <LuMenu />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
