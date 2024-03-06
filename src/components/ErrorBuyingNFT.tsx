import { RootState } from "../ReduxToolkit/store";
import { FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";

const ErrorBuyingNFT = () => {
  let IsActiveError = useSelector((state: RootState) => state.HandleNFT.error);
  console.log(IsActiveError);
  return (
    <div
      className={`flex items-center justify-center fixed left-1/2 ${
        IsActiveError ? "bottom-6 opacity-100" : "-bottom-12 opacity-0"
      } -translate-x-1/2 bg-Light-Grey py-3 px-4 rounded-lg z-50 transition-all`}
    >
      <p className="text-Darker-White">You dont have money</p>
      <div className="mt-px ml-1 text-Light-Green">
        <FaMoneyBillWave />
      </div>
    </div>
  );
};

export default ErrorBuyingNFT;
