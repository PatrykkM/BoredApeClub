import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ScrollDownArrow = () => {
	return (
		<div className="flex grow flex-col items-center  justify-center md:mr-10 md:grow-0">
			<div className="ml-9 flex flex-col items-center md:ml-0">
				<div className="flex h-36 w-12 items-center justify-center rounded-full bg-Img-background lg:h-44 lg:w-16">
					<div className=" relative h-3/4 w-1 rounded-full bg-Light-Green ">
						<div className=" absolute -bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-Light-Green">
							<MdOutlineKeyboardArrowDown />
						</div>
					</div>
				</div>
				<p className="mt-1 font-extralight text-white">Scroll down</p>
			</div>
		</div>
	);
};

export default ScrollDownArrow;
