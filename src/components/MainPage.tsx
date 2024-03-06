import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Introduction from "./Introduction";
import WhyUs from "./WhyUs";
import NFTInsights from "./NFTInsights";
import GetNFT from "./GetNFT";
import Faq from "./Faq";
import PreFotter from "./PreFooter";
import Footer from "./Footer";
import { scrollToElement } from "../CustomFunctions/CustomScrollToElement";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const fakeEvent = { preventDefault: () => {} } as React.MouseEvent<
        HTMLAnchorElement | HTMLButtonElement
      >;
      scrollToElement(fakeEvent, scrollToId);
    }
  }, [location]);

  return (
    <>
      <Introduction />
      <WhyUs />
      <NFTInsights />
      <GetNFT />
      <Faq />
      <PreFotter />
      <Footer />
    </>
  );
};

export default MainPage;
