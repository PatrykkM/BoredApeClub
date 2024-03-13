import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ErrorPage from "./components/layouts/ErrorPage/ErrorPage";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header/Header";
import ErrorBuyingNFT from "./components/layouts/MainPage/ErrorBuyingNFT";
import MainPage from "./components/layouts/MainPage/MainPage";
import MyNFTsPage from "./components/layouts/MyNftPage/MyNFTsPage";
import { persistor, store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<div className="box-border flex flex-col items-center justify-center overflow-hidden bg-main-background font-kanit">
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
			</PersistGate>
		</Provider>
	);
}

export default App;
