export const fadeInView = () => ({
	initial: { y: -30, opacity: 0 },
	whileInView: { y: 0, opacity: 1 },
	viewport: { once: true, amount: 0.5 },
	transition: { duration: 0.3, ease: "easeOut" },
});
export const slideInWithScreenSize = (width: number) => ({
	animate: {
		x: width >= 1024 ? -200 : -100,
		opacity: 0,
	},
	whileInView: {
		x: 0,
		opacity: 1,
	},
	viewport: { once: true, amount: 0.5 },
	transition: {
		type: "spring",
		stiffness: 100,
		damping: 10,
		duration: 1.5,
	},
});
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};
export const containerMotion = () => ({
	variants: containerVariants,
	initial: "hidden",
	whileInView: "visible",
	viewport: { once: true },
});
