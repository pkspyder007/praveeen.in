export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-5 pb-16 pt-4 mx-auto md:flex-row">
        <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
          <h2 className="mb-1 text-sm font-medium tracking-widest text-black title-font"></h2>
          <h1 className="mb-8 text-2xl font-bold tracking-wide text-center text-black lg:text-left lg:text-5xl title-font">
            <span className="leading-12 ">
              Creating Digital Solutions to solve modern problems.
            </span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
            I am Praveen, a software engineer and <u>web developer</u>. Let me
            help you in bringing your ideas to life.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center px-6 py-3 mt-auto text-lg font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded hover:bg-gray-200 hover:text-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Let's Talk
            </button>
            <button className="flex items-center px-6 py-3 ml-4 mt-auto text-lg font-semibold text-black transition duration-500 ease-in-out transform bg-gray-200 rounded hover:bg-gray-800 hover:to-black hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Explore More
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="/img/hero.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
