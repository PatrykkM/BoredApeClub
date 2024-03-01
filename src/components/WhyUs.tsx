import WhyUsDesktop from "./RWD/WhyUsDesktop";
import WhyUsMobile from "./RWD/WhyUsMobile";

const WhyUs = () => {
  return (
    <>
      <div className="md:hidden w-full">
        <WhyUsMobile />
      </div>
      <div className="hidden md:w-full md:flex md:justify-center bg-Light-Grey mt-16">
        <WhyUsDesktop />
      </div>
    </>
  );
};

export default WhyUs;
