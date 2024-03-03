import Header from "./components/Header";
import Introduction from "./components/Introduction";
import WhyUs from "./components/WhyUs";
import { Provider } from "react-redux";
import { store } from "./ReduxToolkit/store";
import NFTInsights from "./components/NFTInsights";
import GetNFT from "./components/GetNFT";
import Faq from "./components/Faq";
import PreFotter from "./components/PreFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center  justify-center    font-kanit bg-main-background min-w-80 overflow-hidden box-border ">
        <div className=" flex  items-center flex-col max-w-lg  ">
          <Header />
        </div>
        <div className=" w-full flex  items-center flex-col max-w-lg md:max-w-7xl">
          <Introduction />
        </div>
        <WhyUs />
        <div className=" flex  items-center flex-col  w-full">
          <NFTInsights />
        </div>
        <GetNFT />
        <div className=" flex  items-center flex-col w-full">
          <Faq />
        </div>
        <PreFotter />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
