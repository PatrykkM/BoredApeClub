import { Provider } from "react-redux";
import { store } from "./ReduxToolkit/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import MyNFTsPage from "./components/MyNFTsPage";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import ErrorBuyingNFT from "./components/ErrorBuyingNFT";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col items-center   justify-center font-kanit bg-main-background  overflow-hidden box-border">
          <Header />
          <Routes>
            <Route path="/BoredApeClub/" element={<MainPage />} />
            <Route path="/BoredApeClub/MyNFTs" element={<MyNFTsPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <ErrorBuyingNFT />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
