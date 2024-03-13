import { useDispatch } from "react-redux";

import { scrollToElement } from "../../../../customFunctions/scrollToElement";
import { ChangeActive } from "../../../../redux/slices/FaqSlice";
import InsightsDesc from "./InsightsDesc";
import InsightsImgSection from "./InsightsImgSection";

const NFTInsights = () => {
	const dispatch = useDispatch();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
		e.preventDefault();
		scrollToElement(e, href);
		setTimeout(() => {
			dispatch(ChangeActive(2));
		}, 1000);
	};

	return (
		<div className="flex w-full flex-col items-center">
			<section className="relative my-12 flex max-w-lg flex-col items-center px-5 md:w-full md:max-w-7xl md:flex-row-reverse md:items-end md:justify-between md:px-7 lg:mb-20">
				<InsightsDesc handleClick={handleClick} />
				<InsightsImgSection handleClick={handleClick} />
			</section>
		</div>
	);
};

export default NFTInsights;
