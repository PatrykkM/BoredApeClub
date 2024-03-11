import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { scrollToElement } from "../../CustomFunctions/scrollToElement";
import About from "./About";
import Faq from "./Faq";
import GetNFT from "./GetNFT";
import Introduction from "./Introduction";
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
			<GetNFT />
			<Faq />
			<PreFotter />
		</>
	);
};

export default MainPage;
