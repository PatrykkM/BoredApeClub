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
      name: "NFTs",
    },
  ];
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string | undefined
  ) => {
    e.preventDefault();
    if (!href) return;
    const id = href;
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed w-full  z-50  ">
      <section className=" flex  grow  items-center justify-center backdrop-blur-lg backdrop-filter ">
        <div className="md:max-w-7xl px-5 flex grow items-center justify-between  py-4 md:px-7">
          <div className="hexagon text-xs h-8 w-7 font-semibold md:h-10 md:w-9 md:text-sm md:font-bold">
            NFT
          </div>
          <div className="flex-grow flex justify-center items-center">
            <ul className="hidden md:flex text-Darker-White  bg-Lighter-Grey justify-around items-center rounded-full h-12  font-extralight">
              {Nav.map((li, id) => (
                <li
                  className={`cursor-pointer  ${
                    id === Nav.length - 1 ? `px-10` : `pl-10`
                  }`}
                  key={li.name}
                >
                  <a
                    onClick={(e) => handleClick(e, li.name)}
                    className="hover:text-Light-Green transition-all"
                  >
                    {li.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white">
            <div className="hidden w-full md:flex justify-center">
              <button className="px-3 py-2 border  border-Light-Green rounded-md flex font-light text-sm">
                My NFTs
              </button>
            </div>
            <div className="md:hidden text-3xl">
              <LuMenu />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
