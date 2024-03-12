import mainApe from "../../assets/apesIMG/FaqApe-Bgclear.png";
import { scrollToElement } from "../../customFunctionss/scrollToElement";

const PreFotter = () => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
		e.preventDefault();
		scrollToElement(e, href);
	};
	return (
		<section
			className="mb-9  mt-12  flex flex-col justify-center md:mb-20 md:w-full md:max-w-7xl"
			id="Dive"
		>
			<div className="flex max-w-lg  flex-col  items-center px-5 md:hidden md:max-w-7xl">
				<h3 className="text-3xl text-Darker-White ">Take Your NFT Investment To the Next Level?</h3>
				<p className="mt-6 font-light text-uninportant-text">
					Are you convinced? Dive into NFT Bored Ape Club, join us, and start earning in the vibrant
					and lucrative world of NFT trading.
				</p>
			</div>
			<div className="mr-5 mt-20 w-full">
				<div className="relative h-44 w-full rounded-r-full bg-Light-Green md:h-80 ">
					<img
						src={mainApe}
						className="absolute -top-20 right-11 z-10 w-64 scale-x-[-1]  transform md:-top-[7rem] md:right-20 md:w-full md:max-w-108"
					/>
					<div className="ml-7 hidden h-full  max-w-xs  flex-col items-start justify-center  md:flex ">
						<h3 className="text-4xl font-bold text-Custom-Grey">
							Take Your NFT Investment To the Next Level?
						</h3>
						<p className="mt-3 text-gray-950 ">
							Are you convinced? Dive into NFT Bored Ape Club, join us, and start earning in the
							vibrant and lucrative world of NFT trading.
						</p>

						<button
							className="mt-6 flex rounded-md border-2 border-Custom-Grey px-8 py-3 font-bold text-Custom-Grey"
							onClick={(e) => handleClick(e, "NFTs")}
						>
							Buy Now
						</button>
					</div>
				</div>
			</div>
			<div className="  flex  justify-center md:hidden">
				<button
					className="mt-9 flex rounded-md border  border-Light-Green px-8 py-2  font-medium text-Light-Green"
					onClick={(e) => handleClick(e, "NFTs")}
				>
					Buy Now
				</button>
			</div>
		</section>
	);
};

export default PreFotter;
