import { FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";

const ErrorBuyingNFT = () => {
	let NoMoneyError = useSelector((state: RootState) => state.HandleNFT.error.NoMoney);
	return (
		<div
			className={`fixed left-1/2 flex w-56 items-center justify-center ${
				NoMoneyError ? "bottom-6 opacity-100" : "-bottom-20 opacity-0"
			} z-50 -translate-x-1/2 rounded-lg  bg-Light-Grey py-3 transition-all`}
		>
			<p className="text-Darker-White">You dont have money</p>
			<div className="ml-1 mt-px text-Light-Green">
				<FaMoneyBillWave />
			</div>
		</div>
	);
};

export default ErrorBuyingNFT;
