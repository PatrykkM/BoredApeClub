const ErrorPage = () => {
  return (
    <section className="flex justify-center items-center bg-Light-Grey w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full px-5 py-10 md:px-10 lg:px-20 xl:max-w-3xl 2xl:max-w-5xl text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-Darker-White">
        <p>Page Not Found</p>
        <p>Error 404</p>
        <a
          href="/"
          className="mt-5 text-lg md:text-xl text-blue-500 hover:underline"
        >
          Go Home
        </a>
      </div>
    </section>
  );
};

export default ErrorPage;
