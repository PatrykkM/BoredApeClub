import { FaCheck } from "react-icons/fa";

import { IntroductionSingleDescProps } from "../../types/propsTypes";

const IntroductionSingleDesc = ({ item }: IntroductionSingleDescProps) => {
	return (
		<>
			<div>
				<div className="flex items-center">
					<FaCheck className="rounded-full bg-white p-1 text-black" />
					<p className="ml-2 text-xs font-extralight md:text-sm lg:text-base">{item.desc}</p>
				</div>
			</div>
		</>
	);
};

export default IntroductionSingleDesc;
