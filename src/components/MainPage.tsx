import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Introduction from "./Introduction";
import About from "./About";
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
      <About />
      <NFTInsights />
      <GetNFT />
      <Faq />
      <PreFotter />
      <Footer />
    </>
  );
};

export default MainPage;
