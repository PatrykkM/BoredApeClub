import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="flex min-h-screen w-full items-center justify-center bg-Light-Grey">
			<div className="2xl:max-w-5xl flex w-full flex-col items-center justify-center px-5 py-10 text-center text-2xl font-semibold text-Darker-White md:px-10 md:text-3xl lg:px-20 lg:text-4xl xl:max-w-3xl">
				<p>Page Not Found</p>
				<p>Error 404</p>
				<Link
					to={"/BoredApeClub/"}
					className="mt-5 text-lg text-blue-500 hover:underline md:text-xl"
				>
					Go Home
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
