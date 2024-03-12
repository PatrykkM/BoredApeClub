import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { scrollToElement } from "../../customFunctions/scrollToElement";
import About from "./About";
import BuyNftSection from "./BuyNftSection";
import Faq from "./Faq";
import Introduction from "./Introduction/Introduction";
import NFTInsights from "./NFTInsights";
import PreFotter from "./PreFooter";

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
			<BuyNftSection />
			<Faq />
			<PreFotter />
		</>
	);
};

export default MainPage;
