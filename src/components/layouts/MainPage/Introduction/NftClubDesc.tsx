import { IntroductionDesc } from "../../../../constans";
import IntroductionSingleDesc from "../../../common/IntroductionSingleDesc";

const NftClubDesc = () => {
	return (
		<div className=" flex h-44 w-44 flex-col items-center rounded-lg bg-Img-background  md:h-52 md:w-52 lg:h-60 lg:w-2/5">
			<div className="flex grow flex-col px-3 py-2 text-lg text-white md:p-4 lg:justify-center lg:p-5 ">
				<h4 className="font-medium md:text-xl lg:text-3xl">NFT club</h4>
				<div className="my-1  flex items-center ">
					<div className=" hexagon h-8 w-7 text-xs font-semibold text-Custom-Grey md:h-9 md:w-8">
						NFT
					</div>
					<p className="ml-4 text-3xl text-Light-Green md:text-4xl">+550%</p>
				</div>
				<div className="flex grow flex-col justify-around lg:justify-around">
					{IntroductionDesc.map((item, id) => (
						<IntroductionSingleDesc item={item} key={id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NftClubDesc;
