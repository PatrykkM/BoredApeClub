import { singleProduct } from "./common";

export interface SingleNftProps {
	id: number;
	NFT: singleProduct;
	active: boolean;
}
export interface OwnedSingleNftProps {
	id: number;
	NFT: singleProduct;
}
export interface AboutOptionProps {
	option: {
		number: number;
	};
	setActiveOption: (number: number) => void;
	activeOption: number;
}
export interface FaqOptionsProps {
	Faq: {
		Title: string;
		desc: string;
	};
	id: number;
}
export interface NavDesktopOptionsProps {
	id: number;
	li: {
		name: string;
	};
	active: boolean;
	setActive: (value: boolean) => void;
}
export interface ActiveMobileNavProps {
	CurrentBalance: number;
	handleActive: () => void;
	active: boolean;
	setActive: (value: boolean) => void;
}
