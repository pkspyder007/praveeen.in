import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* <header className="lg:px-16 px-6 bg-black text-white flex flex-wrap items-center lg:py-4 py-3"> */}
      <header className="flex flex-wrap items-center bg-black text-white py-2 px-6 lg:px-16 tracking-wide">
        <div className="flex-1 flex justify-between items-center">
          <Link href="/">
            <h2 className="text-2xl font-bold tracking-wider">Praveen Kumar</h2>
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex font-bold items-center justify-between text-base text-white-700 pt-4 lg:pt-0">
              <li>
                <Link href="/about">
                  <span className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <span className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white">
                    Work
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://blog.praveeen.in">
                  <span className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white">
                    Contact
                  </span>
                </Link>
              </li>
              {/* <li>
                <button className="inline-flex items-center px-6 py-2 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  Contact
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
