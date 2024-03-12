import { AboutOptionProps } from "../../typess/propsTypess";

const AboutOption = ({ option, setActiveOption, activeOption }: AboutOptionProps) => {
	return (
		<div
			onClick={() => setActiveOption(option.number)}
			className={`${
				activeOption === option.number ? `border-Light-Green` : `border-Lighter-Grey`
			} mb-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 bg-Lighter-Grey text-2xl text-white transition-all lg:mb-6`}
		>
			{option.number}
		</div>
	);
};

export default AboutOption;
