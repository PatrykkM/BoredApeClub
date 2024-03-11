import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { ChangeActive } from "../../ReduxToolkit/Slices/FaqSlice";
import { RootState } from "../../ReduxToolkit/store";
import { FaqOptionsProps } from "../../Types/PropsTypes";

const FaqOption = ({ Faq, id }: FaqOptionsProps) => {
	const dispatch = useDispatch();

	const activeNumber = useSelector((state: RootState) => state.FAQSlice.ActiveNumber);
	return (
		<div className="mb-3 flex flex-col border-b border-uninportant-text text-xl font-light text-Darker-White md:text-2xl">
			<div className="flex  w-full items-center justify-between">
				<div className="mb-1">{Faq.Title}</div>
				<div className="mb-1 cursor-pointer text-lg">
					{activeNumber === id + 1 ? (
						<FaMinus onClick={() => dispatch(ChangeActive(0))} />
					) : (
						<FaPlus onClick={() => dispatch(ChangeActive(id + 1))} />
					)}
				</div>
			</div>
			<div
				className={`mb-2 flex items-center overflow-hidden transition-all duration-75 ${
					activeNumber === id + 1 ? `h-auto` : `h-0`
				}`}
			>
				<div
					className={`overflow-hidden text-xs font-light text-uninportant-text transition-all duration-75 lg:text-sm  ${
						activeNumber === id + 1 ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0`
					}`}
				>
					<div className="md:max-w-md ">{Faq.desc}</div>
				</div>
			</div>
		</div>
	);
};

export default FaqOption;
