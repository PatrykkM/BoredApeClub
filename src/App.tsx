import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./ReduxToolkit/store";
import ErrorBuyingNFT from "./components/Layouts/ErrorBuyingNFT";
import ErrorPage from "./components/Layouts/ErrorPage";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header/Header";
import MainPage from "./components/Layouts/MainPage";
import MyNFTsPage from "./components/Layouts/MyNFTsPage";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="box-border  flex   flex-col items-center justify-center  overflow-hidden bg-main-background font-kanit">
					<Header />
					<Routes>
						<Route path="/BoredApeClub/" element={<MainPage />} />
						<Route path="/BoredApeClub/MyNFTs" element={<MyNFTsPage />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
					<Footer />
					<ErrorBuyingNFT />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
